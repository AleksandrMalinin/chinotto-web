import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ScreenshotFrame, showcaseGridClass } from "./ScreenshotFrame";
import { productScreenshots } from "../../content/productScreenshots";
import {
  resurfacingEyebrow,
  resurfacingHeading,
  resurfacingStory,
} from "../../content/continuity";
import { cn } from "../ui/utils";

export function ResurfacingStorySection() {
  return (
    <Section id="resurfacing" className="!py-12 md:!py-20 lg:!py-24">
      <div
        className={cn(
          "mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-14 px-2 lg:items-start lg:gap-20",
          showcaseGridClass(true),
        )}
      >
        <Reveal className="order-2 min-w-0 lg:order-1 lg:sticky lg:top-24">
          <ScreenshotFrame
            src={productScreenshots.trails.src}
            alt={productScreenshots.trails.alt}
          />
        </Reveal>

        <div className="order-1 min-w-0 lg:order-2 lg:py-6">
          <Reveal>
            <p className="landing-eyebrow">{resurfacingEyebrow}</p>
            <h2 className="landing-heading mt-3 sm:mt-4">{resurfacingHeading}</h2>
          </Reveal>

          <ol className="story-thread mt-10 lg:max-w-md">
            {resurfacingStory.map((beat, i) => (
              <li
                key={beat.day}
                className={cn("story-thread-beat", `story-thread-beat--${i}`)}
              >
                <Reveal delay={i * 90}>
                  <p className="landing-story-label">{beat.day}</p>
                  <p className="landing-body mt-2">{beat.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
