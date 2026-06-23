import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProductVideoFrame } from "./ProductVideoFrame";
import { showcaseGridClass } from "./ScreenshotFrame";
import { productVideos } from "../../content/productVideos";
import {
  captureEyebrow,
  captureHeading,
  capturePoints,
} from "../../content/continuity";
import { cn } from "../ui/utils";

export function CaptureSection() {
  return (
    <Section id="capture" className="!py-12 md:!py-20 lg:!py-24">
      <div
        className={cn(
          "mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-14 px-2 lg:items-start lg:gap-20",
          showcaseGridClass(false),
        )}
      >
        <div className="order-1 min-w-0 lg:py-6">
          <Reveal>
            <p className="landing-eyebrow">{captureEyebrow}</p>
            <h2 className="landing-heading mt-3 sm:mt-4">{captureHeading}</h2>
          </Reveal>

          <ol className="mt-10 space-y-8 border-l border-landing-card-border pl-6 lg:max-w-md">
            {capturePoints.map((point, i) => (
              <Reveal key={point.title} delay={i * 90}>
                <li>
                  <h3 className="landing-step-title">{point.title}</h3>
                  <p className="landing-body mt-2">{point.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="order-2 min-w-0 lg:sticky lg:top-24">
          <ProductVideoFrame
            src={productVideos.howItWorks.src}
            poster={productVideos.howItWorks.poster}
            alt={productVideos.howItWorks.alt}
          />
        </Reveal>
      </div>
    </Section>
  );
}
