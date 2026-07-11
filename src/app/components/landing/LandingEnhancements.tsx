import { QuickCaptureOverlay } from "./QuickCaptureOverlay";
import { LandingScrollTopDock } from "./LandingScrollTop";
import { ScrollThread } from "./ScrollThread";

/** Landing-only interactions — capture demo, scroll thread, back-to-top. */
export function LandingEnhancements() {
  return (
    <>
      <ScrollThread />
      <LandingScrollTopDock />
      <QuickCaptureOverlay />
    </>
  );
}
