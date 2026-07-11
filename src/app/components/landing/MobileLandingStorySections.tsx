import { ProblemSection } from "./ProblemSection";
import { CaptureSection } from "./CaptureSection";
import { SharingSection } from "./SharingSection";
import { TrailsSpacesSection } from "./TrailsSpacesSection";
import { PlatformsSection } from "./PlatformsSection";
import { NotForSection } from "./NotForSection";
import { LocalFirstSection } from "./LocalFirstSection";
import { SectionRule } from "./SectionRule";
import { MobileCaptureSection } from "./MobileCaptureSection";
import { MobileResurfacingSection } from "./MobileResurfacingSection";

/**
 * Mobile landing narrative — pocket-first, then full parity:
 * iPhone role → resurfacing → platforms → desktop depth (capture, trails, share).
 */
export function MobileLandingStorySections() {
  return (
    <>
      <ProblemSection />
      <SectionRule />
      <MobileCaptureSection />
      <MobileResurfacingSection />
      <PlatformsSection />
      <CaptureSection />
      <TrailsSpacesSection />
      <SharingSection />
      <SectionRule />
      <NotForSection />
      <LocalFirstSection />
    </>
  );
}
