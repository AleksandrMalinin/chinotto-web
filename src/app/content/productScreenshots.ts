/**
 * One screenshot per landing role — swap files in `src/assets/` when updating captures.
 *
 *   chinotto-main.webp          → capture, platformDesktop, How it works
 *   chinotto-preview.webp       → resurfacing, trails (swap when echo / time strand capture ready)
 *   chinotto-spaces.webp        → spaces (Spaces)
 *   chinotto-share.webp         → sharing (add before launch — placeholder on site until then)
 *   chinotto-mobile-main.webp   → platformMobile, mobile hero
 *   chinotto-mobile-preview.webp → mobile flip hero
 *   chinotto-widget-medium.webp   → medium home screen widget (Platforms mobile)
 *   chinotto-detail-*.webp        → pre-cropped desktop UI for mobile landing (< md)
 */
import captureImg from "@/assets/chinotto-main.webp";
import trailsImg from "@/assets/chinotto-preview.webp";
import spacesImg from "@/assets/chinotto-spaces.webp";
import detailStreamImg from "@/assets/chinotto-detail-stream.webp";
import detailTrailsImg from "@/assets/chinotto-detail-trails.webp";
import detailSpacesImg from "@/assets/chinotto-detail-spaces.webp";
import mobileMainImg from "@/assets/chinotto-mobile-main.webp";
import mobilePreviewImg from "@/assets/chinotto-mobile-preview.webp";
import widgetMediumImg from "@/assets/chinotto-widget-medium.webp";

export interface ProductScreenshot {
  src: string;
  alt: string;
  /** Pre-cropped desktop UI — readable on narrow viewports; full `src` on md+. */
  mobileDetailSrc?: string;
  /** True when `src` is a stand-in — landing shows ScreenshotPlaceholder instead. */
  pending?: boolean;
}

export const productScreenshots = {
  capture: {
    src: captureImg,
    alt: "Chinotto on desktop — quick capture and stream",
  },
  resurfacing: {
    src: trailsImg,
    alt: "Chinotto — memory echo and time strand",
  },
  trails: {
    src: trailsImg,
    alt: "Chinotto — thought resurfacing and trails",
    mobileDetailSrc: detailTrailsImg,
  },
  share: {
    src: "",
    alt: "Chinotto — shared read-only thread",
    pending: true,
  },
  spaces: {
    src: spacesImg,
    alt: "Chinotto on desktop — Spaces",
    mobileDetailSrc: detailSpacesImg,
  },
  platformDesktop: {
    src: captureImg,
    alt: "Chinotto on desktop — thought stream",
    mobileDetailSrc: detailStreamImg,
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
