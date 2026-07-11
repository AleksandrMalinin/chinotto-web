/**
 * One screenshot per landing role — swap files in `src/assets/` when updating captures.
 *
 *   chinotto-main.webp          → platformDesktop (time strand + echo)
 *   chinotto-preview.webp       → connected section (trails, spaces in frame)
 *   chinotto-detail-stream.webp → platformDesktop mobile crop (from main)
 *   chinotto-detail-trails.webp → connected section mobile crop (from preview)
 */
import captureImg from "@/assets/chinotto-main.webp";
import trailsImg from "@/assets/chinotto-preview.webp";
import detailStreamImg from "@/assets/chinotto-detail-stream.webp";
import detailTrailsImg from "@/assets/chinotto-detail-trails.webp";
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
    alt: "Chinotto — trails, recall, and Spaces on desktop",
    mobileDetailSrc: detailTrailsImg,
  },
  share: {
    src: "",
    alt: "Chinotto — shared read-only thread",
    pending: true,
  },
  platformDesktop: {
    src: captureImg,
    alt: "Chinotto on desktop — time strand and memory echo",
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
