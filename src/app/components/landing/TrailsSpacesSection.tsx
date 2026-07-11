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

const VISUAL_FEATURES = [
  {
    key: "trails",
    ...trailsFeature,
    screenshot: productScreenshots.trails,
  },
  {
    key: "spaces",
    ...spacesFeature,
    screenshot: productScreenshots.spaces,
  },
] as const;

/** Trails, recall labels, and Spaces — two screenshots, recall is text-only. */
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

        <Reveal
          className="mx-auto mt-8 max-w-xl text-center sm:mt-14 lg:mt-16"
          delay={40}
        >
          <div className="border-l border-landing-card-border pl-6 text-left lg:mx-auto lg:max-w-md">
            <h3 className="landing-step-title">{recallFeature.title}</h3>
            <p
              className="landing-body mt-3"
              dangerouslySetInnerHTML={{ __html: recallFeature.body }}
            />
          </div>
        </Reveal>

        <div className="mt-12 space-y-16 sm:mt-16 lg:space-y-24">
          {VISUAL_FEATURES.map((feature, i) => {
            const imageFirst = i % 2 === 0;

            return (
              <div
                key={feature.key}
                className={cn(
                  "grid grid-cols-1 items-center gap-10 lg:gap-20",
                  showcaseGridClass(imageFirst),
                )}
              >
                <Reveal
                  className={cn("min-w-0", !imageFirst && "lg:order-2")}
                  delay={i * 40}
                >
                  <ResponsiveProductScreenshot screenshot={feature.screenshot} />
                </Reveal>

                <Reveal
                  className={cn("min-w-0", !imageFirst && "lg:order-1")}
                  delay={i * 40 + 60}
                >
                  <div className="border-l border-landing-card-border pl-6 lg:max-w-md">
                    <h3 className="landing-step-title">{feature.title}</h3>
                    <p
                      className="landing-body mt-3"
                      dangerouslySetInnerHTML={{ __html: feature.body }}
                    />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
