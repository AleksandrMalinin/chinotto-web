/**
 * Canonical outbound links for marketing CTAs.
 * Set `VITE_IOS_APP_STORE_URL` in env for a live App Store button when the listing is public.
 */
export const CHINOTTO_MAC_DOWNLOAD_URL =
  "https://github.com/AleksandrMalinin/chinotto/releases/latest/download/Chinotto_1.2.0_aarch64.dmg";

export const CHINOTTO_IOS_APP_STORE_URL: string =
  import.meta.env.VITE_IOS_APP_STORE_URL ?? "";

export const CHINOTTO_GITHUB_REPO = "https://github.com/AleksandrMalinin/chinotto";
