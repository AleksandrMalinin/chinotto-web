import type { ShareThreadPublishBody } from "./types.js";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const MAX_HTML_BYTES = 2_000_000;

export function isValidToken(token: string): boolean {
  return UUID_RE.test(token);
}

export function coerceJsonBody(raw: unknown): unknown {
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw) as unknown;
    } catch {
      return null;
    }
  }
  return raw;
}

export function parsePublishBody(
  raw: unknown
): { ok: true; body: ShareThreadPublishBody } | { ok: false; error: string } {
  const body = coerceJsonBody(raw);
  if (body == null || typeof body !== "object") {
    return { ok: false, error: "expected JSON object" };
  }
  const o = body as Record<string, unknown>;
  const token = o.token;
  const html = o.html;
  const expiresAt = o.expiresAt;
  if (typeof token !== "string" || !isValidToken(token)) {
    return { ok: false, error: "invalid token" };
  }
  if (typeof html !== "string" || html.length === 0) {
    return { ok: false, error: "html required" };
  }
  if (html.length > MAX_HTML_BYTES) {
    return { ok: false, error: "html too large" };
  }
  if (!/<html/i.test(html)) {
    return { ok: false, error: "html must be a full document" };
  }
  if (typeof expiresAt !== "string") {
    return { ok: false, error: "expiresAt required" };
  }
  const expiresMs = Date.parse(expiresAt);
  if (Number.isNaN(expiresMs)) {
    return { ok: false, error: "invalid expiresAt" };
  }
  if (expiresMs <= Date.now()) {
    return { ok: false, error: "expiresAt must be in the future" };
  }
  const contextNote =
    o.contextNote == null
      ? undefined
      : typeof o.contextNote === "string"
        ? o.contextNote.trim() || undefined
        : undefined;
  if (o.contextNote != null && typeof o.contextNote !== "string") {
    return { ok: false, error: "contextNote must be a string" };
  }
  return {
    ok: true,
    body: { token, html, expiresAt, contextNote },
  };
}

export function isExpired(expiresAt: string): boolean {
  return Date.parse(expiresAt) <= Date.now();
}

export function ttlSecondsUntil(expiresAt: string): number {
  const sec = Math.ceil((Date.parse(expiresAt) - Date.now()) / 1000);
  return Math.max(60, sec);
}
