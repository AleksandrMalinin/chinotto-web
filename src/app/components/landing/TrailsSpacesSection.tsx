import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ResponsiveProductScreenshot, showcaseGridClass } from "./ScreenshotFrame";
import { productScreenshots } from "../../content/productScreenshots";
import {
  connectedEyebrow,
  connectedHeading,
  recallFeature,
  spacesFeature,
  trailsFeature,
} from "../../content/continuity";
import { cn } from "../ui/utils";

const CONNECTED_FEATURES = [
  trailsFeature,
  recallFeature,
  spacesFeature,
] as const;

/** Trails, recall, and Spaces — one desktop shot, three text blocks. */
export function TrailsSpacesSection() {
  return (
    <Section id="connected" className="!py-12 md:!py-28 lg:!py-32">
      <div className="mx-auto w-full max-w-[1100px] px-2">
        <Reveal className="text-center">
          <p className="landing-eyebrow">{connectedEyebrow}</p>
          <h2 className="landing-heading mx-auto mt-4 max-w-[34rem]">
            {connectedHeading}
          </h2>
        </Reveal>

        <div
          className={cn(
            "mt-12 grid grid-cols-1 items-start gap-10 sm:mt-16 lg:gap-20",
            showcaseGridClass(true),
          )}
        >
          <Reveal className="min-w-0 lg:sticky lg:top-24">
            <ResponsiveProductScreenshot screenshot={productScreenshots.trails} />
          </Reveal>

          <div className="min-w-0 space-y-10 lg:py-6">
            {CONNECTED_FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 50}>
                <div className="border-l border-landing-card-border pl-6 lg:max-w-md">
                  <h3 className="landing-step-title">{feature.title}</h3>
                  <p
                    className="landing-body mt-3"
                    dangerouslySetInnerHTML={{ __html: feature.body }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
