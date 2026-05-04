/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public App Store product page; optional until the listing is live */
  readonly VITE_IOS_APP_STORE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}
