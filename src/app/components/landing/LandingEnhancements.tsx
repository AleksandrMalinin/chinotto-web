import { QuickCaptureOverlay } from "./QuickCaptureOverlay";
import { ScrollThread } from "./ScrollThread";

/** Landing-only interactions — capture demo, scroll thread. */
export function LandingEnhancements() {
  return (
    <>
      <ScrollThread />
      <QuickCaptureOverlay />
    </>
  );
}
