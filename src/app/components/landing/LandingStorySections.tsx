import { CaptureSection } from "./CaptureSection";
import { ProblemSection } from "./ProblemSection";
import { ResurfacingStorySection } from "./ResurfacingStorySection";
import { LocalFirstSection } from "./LocalFirstSection";
import { NotForSection } from "./NotForSection";
import { PlatformsSection } from "./PlatformsSection";

/** Narrative blocks — problem, proof, capture, two experiences, filter, trust. */
export function LandingStorySections() {
  return (
    <>
      <ProblemSection />
      <ResurfacingStorySection />
      <CaptureSection />
      <PlatformsSection />
      <NotForSection />
      <LocalFirstSection />
    </>
  );
}
