import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  ScreenshotFrame,
  showcaseGridClass,
} from "./ScreenshotFrame";
import { productScreenshots } from "../../content/productScreenshots";
import { cn } from "../ui/utils";

const FEATURES = [
  {
    title: "Trails",
    body: "Chinotto links thoughts that share language, so older context resurfaces exactly when it&rsquo;s relevant — no tagging, no manual linking.",
    screenshot: productScreenshots.trails,
  },
  {
    title: "Spaces",
    body: "On desktop, optional lenses — Inbox, Work, Personal — separate threads without folders. One timeline, filtered when you want it.",
    screenshot: productScreenshots.spaces,
  },
] as const;

export function TrailsSpacesSection() {
  return (
    <Section id="connected" className="!py-20 md:!py-28 lg:!py-32">
      <div className="mx-auto w-full max-w-[1100px] px-2">
        <Reveal className="text-center">
          <p className="landing-eyebrow">Trails &amp; Spaces</p>
          <h2 className="landing-heading mx-auto mt-4 max-w-[34rem]">
            It connects your thinking for you.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 lg:space-y-24">
          {FEATURES.map((feature, i) => {
            const imageFirst = i % 2 === 0;

            return (
              <div
                key={feature.title}
                className={cn(
                  "grid grid-cols-1 items-center gap-10 lg:gap-20",
                  showcaseGridClass(imageFirst),
                )}
              >
                <Reveal
                  className={cn("min-w-0", !imageFirst && "lg:order-2")}
                  delay={i * 40}
                >
                  <ScreenshotFrame
                    src={feature.screenshot.src}
                    alt={feature.screenshot.alt}
                  />
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
