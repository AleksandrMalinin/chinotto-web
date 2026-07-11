/**
 * Short product clips — swap files in `src/assets/` when updating captures.
 *
 *   chinotto-how-it-works.mp4 → Capture section (poster: chinotto-main.webp)
 *   chinotto-threads.mp4      → Share a thread (poster: chinotto-main.webp)
 */
import howItWorksVideo from "@/assets/chinotto-how-it-works.mp4";
import threadsVideo from "@/assets/chinotto-threads.mp4";
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
  shareThread: {
    src: threadsVideo,
    poster: capturePoster,
    alt: "Chinotto — share a read-only thread",
  },
} as const satisfies Record<string, ProductVideo>;
