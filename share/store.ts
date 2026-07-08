import { Redis } from "@upstash/redis";
import type { ShareThreadRecord } from "./types";
import { isExpired, ttlSecondsUntil } from "./validate";

const KEY_PREFIX = "share:thread:";

type MemoryEntry = ShareThreadRecord & { timer?: ReturnType<typeof setTimeout> };

const memory = new Map<string, MemoryEntry>();

let redisClient: Redis | null | undefined;

function getRedis(): Redis | null {
  if (redisClient !== undefined) return redisClient;
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) {
    redisClient = null;
    return null;
  }
  redisClient = new Redis({ url, token });
  return redisClient;
}

function redisConfigured(): boolean {
  return getRedis() != null;
}

function key(token: string): string {
  return `${KEY_PREFIX}${token}`;
}

function scheduleMemoryExpiry(token: string, expiresAt: string): void {
  const entry = memory.get(token);
  if (!entry) return;
  if (entry.timer) clearTimeout(entry.timer);
  const ms = Date.parse(expiresAt) - Date.now();
  if (ms <= 0) {
    memory.delete(token);
    return;
  }
  entry.timer = setTimeout(() => memory.delete(token), ms);
}

export async function putShareThread(
  token: string,
  record: ShareThreadRecord
): Promise<void> {
  const redis = getRedis();
  if (redis) {
    await redis.set(key(token), record, { ex: ttlSecondsUntil(record.expiresAt) });
    return;
  }
  memory.set(token, { ...record });
  scheduleMemoryExpiry(token, record.expiresAt);
}

export async function getShareThread(
  token: string
): Promise<ShareThreadRecord | null> {
  const redis = getRedis();
  let record: ShareThreadRecord | null;
  if (redis) {
    record = await redis.get<ShareThreadRecord>(key(token));
  } else {
    const entry = memory.get(token);
    record = entry
      ? {
          html: entry.html,
          expiresAt: entry.expiresAt,
          contextNote: entry.contextNote,
          createdAt: entry.createdAt,
        }
      : null;
  }
  if (!record) return null;
  if (isExpired(record.expiresAt)) {
    await deleteShareThread(token);
    return null;
  }
  return record;
}

export async function deleteShareThread(token: string): Promise<boolean> {
  const redis = getRedis();
  if (redis) {
    const n = await redis.del(key(token));
    return n > 0;
  }
  const had = memory.has(token);
  const entry = memory.get(token);
  if (entry?.timer) clearTimeout(entry.timer);
  memory.delete(token);
  return had;
}

export function usingMemoryStore(): boolean {
  return !redisConfigured();
}
