import { HowItWorksSection } from "./HowItWorksSection";
import { TrailsSpacesSection } from "./TrailsSpacesSection";
import { LocalFirstSection } from "./LocalFirstSection";
import { NotForSection } from "./NotForSection";
import { PlatformsSection } from "./PlatformsSection";

/** Shared narrative blocks — roles, mechanics, differentiators, trust. */
export function LandingStorySections() {
  return (
    <>
      <PlatformsSection />
      <HowItWorksSection />
      <TrailsSpacesSection />
      <NotForSection />
      <LocalFirstSection />
    </>
  );
}
