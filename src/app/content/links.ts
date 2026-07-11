/**
 * Canonical outbound links for marketing CTAs.
 * Override iOS via `VITE_IOS_APP_STORE_URL` if needed (e.g. another region or TestFlight).
 */
export const CHINOTTO_MAC_VERSION = "3.0.0";

export const CHINOTTO_MAC_DOWNLOAD_URL = `https://github.com/AleksandrMalinin/chinotto/releases/latest/download/Chinotto_${CHINOTTO_MAC_VERSION}_aarch64.dmg`;

const DEFAULT_IOS_APP_STORE_URL =
  "https://apps.apple.com/us/app/chinotto/id6761345307";

export const CHINOTTO_IOS_APP_STORE_URL: string =
  import.meta.env.VITE_IOS_APP_STORE_URL ?? DEFAULT_IOS_APP_STORE_URL;

export const CHINOTTO_GITHUB_REPO =
  "https://github.com/AleksandrMalinin/chinotto";

export const CHINOTTO_MOBILE_GITHUB_REPO =
  "https://github.com/AleksandrMalinin/chinotto-mobile";
