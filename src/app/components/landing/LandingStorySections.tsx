import { CaptureSection } from "./CaptureSection";
import { ProblemSection } from "./ProblemSection";
import { ResurfacingStorySection } from "./ResurfacingStorySection";
import { LocalFirstSection } from "./LocalFirstSection";
import { NotForSection } from "./NotForSection";
import { PlatformsSection } from "./PlatformsSection";
import { SectionRule } from "./SectionRule";
import { SharingSection } from "./SharingSection";
import { TrailsSpacesSection } from "./TrailsSpacesSection";

/** Narrative blocks — problem, proof, share, capture, connect, two experiences, filter, trust. */
export function LandingStorySections() {
  return (
    <>
      <ProblemSection />
      <SectionRule />
      <ResurfacingStorySection />
      <SharingSection />
      <CaptureSection />
      <TrailsSpacesSection />
      <SectionRule />
      <PlatformsSection />
      <NotForSection />
      <LocalFirstSection />
    </>
  );
}
