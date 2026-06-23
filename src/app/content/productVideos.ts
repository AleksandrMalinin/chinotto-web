/**
 * Short product clips — swap files in `src/assets/` when updating captures.
 *
 *   chinotto-how-it-works.mp4 → How it works (poster: chinotto-main.webp)
 */
import howItWorksVideo from "@/assets/chinotto-how-it-works.mp4";
import capturePoster from "@/assets/chinotto-main.webp";

export interface ProductVideo {
  src: string;
  poster: string;
  alt: string;
}

export const productVideos = {
  howItWorks: {
    src: howItWorksVideo,
    poster: capturePoster,
    alt: "Chinotto — quick capture and stream",
  },
} as const satisfies Record<string, ProductVideo>;
