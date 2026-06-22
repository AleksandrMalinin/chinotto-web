import { HowItWorksSection } from "./HowItWorksSection";
import { TrailsSpacesSection } from "./TrailsSpacesSection";
import { LocalFirstSection } from "./LocalFirstSection";
import { NotForSection } from "./NotForSection";
import { PlatformsSection } from "./PlatformsSection";

/** Shared narrative blocks — category first, differentiator, then mechanics. */
export function LandingStorySections() {
  return (
    <>
      <PlatformsSection />
      <TrailsSpacesSection />
      <HowItWorksSection />
      <NotForSection />
      <LocalFirstSection />
    </>
  );
}
