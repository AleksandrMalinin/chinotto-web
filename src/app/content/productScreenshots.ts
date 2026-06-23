/**
 * One screenshot per landing role — swap files in `src/assets/` when updating captures.
 *
 *   chinotto-main.webp          → capture, platformDesktop, How it works
 *   chinotto-preview.webp       → trails (Trails)
 *   chinotto-spaces.webp        → spaces (Spaces)
 *   chinotto-mobile-main.webp   → platformMobile, mobile hero
 *   chinotto-mobile-preview.webp → mobile flip hero
 *   chinotto-widget-medium.webp   → medium home screen widget (Platforms mobile)
 */
import captureImg from "@/assets/chinotto-main.webp";
import trailsImg from "@/assets/chinotto-preview.webp";
import spacesImg from "@/assets/chinotto-spaces.webp";
import mobileMainImg from "@/assets/chinotto-mobile-main.webp";
import mobilePreviewImg from "@/assets/chinotto-mobile-preview.webp";
import widgetMediumImg from "@/assets/chinotto-widget-medium.webp";

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
  widgetMedium: {
    src: widgetMediumImg,
    alt: "Chinotto medium home screen widget on iPhone",
  },
} as const satisfies Record<string, ProductScreenshot>;
