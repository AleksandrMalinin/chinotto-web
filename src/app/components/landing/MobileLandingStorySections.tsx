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
 * iPhone role → resurfacing → two platforms → desktop depth (capture, share, trails).
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
      <SharingSection />
      <TrailsSpacesSection />
      <SectionRule />
      <NotForSection />
      <LocalFirstSection />
    </>
  );
}
