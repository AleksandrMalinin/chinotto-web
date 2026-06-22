/**
 * One screenshot per landing role — swap files in `src/assets/` when updating captures.
 *
 *   chinotto-main.webp          → capture, platformDesktop, How it works
 *   chinotto-preview.webp       → trails (Trails); replace with chinotto-spaces.webp for Spaces
 *   chinotto-welcome.webp       → settings (Local-first)
 *   chinotto-mobile-main.webp   → platformMobile, mobile hero
 *   chinotto-mobile-preview.webp → mobile flip hero
 */
import captureImg from "@/assets/chinotto-main.webp";
import trailsImg from "@/assets/chinotto-preview.webp";
/** Replace with `@/assets/chinotto-spaces.webp` when the Spaces capture is ready. */
import spacesImg from "@/assets/chinotto-preview.webp";
import settingsImg from "@/assets/chinotto-welcome.webp";
import mobileMainImg from "@/assets/chinotto-mobile-main.webp";
import mobilePreviewImg from "@/assets/chinotto-mobile-preview.webp";

export interface ProductScreenshot {
  src: string;
  alt: string;
}

export const productScreenshots = {
  capture: {
    src: captureImg,
    alt: "Chinotto on desktop — quick capture and stream",
  },
  trails: {
    src: trailsImg,
    alt: "Chinotto on desktop — related thoughts",
  },
  spaces: {
    src: spacesImg,
    alt: "Chinotto on desktop — Spaces",
  },
  settings: {
    src: settingsImg,
    alt: "Chinotto — settings and privacy",
  },
  platformDesktop: {
    src: captureImg,
    alt: "Chinotto on desktop — thought stream",
  },
  platformMobile: {
    src: mobileMainImg,
    alt: "Chinotto on mobile — capture stream",
  },
  mobileMain: {
    src: mobileMainImg,
    alt: "Chinotto on mobile — capture stream",
  },
  mobilePreview: {
    src: mobilePreviewImg,
    alt: "Chinotto on mobile — thought detail",
  },
} as const satisfies Record<string, ProductScreenshot>;
