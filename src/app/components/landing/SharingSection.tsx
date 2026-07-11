import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ResponsiveProductScreenshot, showcaseGridClass } from "./ScreenshotFrame";
import { productScreenshots } from "../../content/productScreenshots";
import {
  sharingBody,
  sharingEyebrow,
  sharingHeading,
  sharingPoints,
} from "../../content/continuity";
import { cn } from "../ui/utils";

/** Share a thread outward — read-only hosted link (desktop). */
export function SharingSection() {
  return (
    <Section id="sharing" className="!py-12 md:!py-28 lg:!py-32">
      <div
        className={cn(
          "mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-14 px-2 lg:items-start lg:gap-20",
          showcaseGridClass(true),
        )}
      >
        <Reveal className="order-2 hidden min-w-0 md:block lg:order-1 lg:sticky lg:top-24">
          <ResponsiveProductScreenshot
            screenshot={productScreenshots.share}
            placeholderLabel="Share thread"
            placeholderHint="src/assets/chinotto-share.webp"
          />
        </Reveal>

        <div className="order-1 min-w-0 lg:order-2 lg:py-6">
          <Reveal>
            <p className="landing-eyebrow">{sharingEyebrow}</p>
            <h2 className="landing-heading mt-4">{sharingHeading}</h2>
            <p className="landing-body mt-5 max-w-md">{sharingBody}</p>
          </Reveal>

          <ul className="mt-10 space-y-8">
            {sharingPoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 70}>
                <li className="border-l border-landing-card-border pl-6">
                  <h3 className="landing-step-title">{point.title}</h3>
                  <p className="landing-body mt-2 max-w-sm">{point.body}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
