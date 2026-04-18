/** Client-only: last Updates page version the visitor acknowledged (localStorage). */
export const UPDATES_SEEN_STORAGE_KEY = "chinotto:lastSeenUpdatesVersion";

export const UPDATES_SEEN_EVENT = "chinotto:updates-seen";

/** Compare semver-like strings (major.minor.patch). */
export function compareSemver(a: string, b: string): number {
  const pa = a.split(".").map((x) => parseInt(x, 10) || 0);
  const pb = b.split(".").map((x) => parseInt(x, 10) || 0);
  const len = Math.max(pa.length, pb.length);
  for (let i = 0; i < len; i++) {
    const da = pa[i] ?? 0;
    const db = pb[i] ?? 0;
    if (da < db) return -1;
    if (da > db) return 1;
  }
  return 0;
}

/** True when there is a newer listed release than the user last opened on Updates. */
export function hasUnreadUpdates(latestVersion: string): boolean {
  if (typeof window === "undefined") return false;
  const seen = window.localStorage.getItem(UPDATES_SEEN_STORAGE_KEY);
  if (!seen) return true;
  return compareSemver(seen, latestVersion) < 0;
}

/** Call when the user opens the Updates page so the header dot can dim. */
export function markUpdatesSeen(version: string): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(UPDATES_SEEN_STORAGE_KEY, version);
  window.dispatchEvent(new Event(UPDATES_SEEN_EVENT));
}
