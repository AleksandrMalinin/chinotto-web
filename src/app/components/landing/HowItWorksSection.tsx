import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { productScreenshots } from "../../content/productScreenshots";
import { MACOS_QUICK_CAPTURE } from "../../content/macosShortcuts";

const STEPS = [
  {
    index: "01",
    title: "Capture",
    body: `Press ${MACOS_QUICK_CAPTURE}, type the thought, close. No title, no folder, no decision.`,
  },
  {
    index: "02",
    title: "One stream",
    body: "Every capture lands in one chronological flow you can scan, not a pile of files.",
  },
  {
    index: "03",
    title: "Revisit later",
    body: "Search, jump to a date, or follow trails back to what you were thinking.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="!py-20 md:!py-28 lg:!py-32">
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-14 px-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-20">
        <Reveal className="order-2 lg:order-1 lg:sticky lg:top-24">
          <ScreenshotFrame
            src={productScreenshots.capture.src}
            alt={productScreenshots.capture.alt}
          />
        </Reveal>

        <div className="order-1 lg:order-2 lg:py-6">
          <Reveal>
            <p className="landing-eyebrow">How it works</p>
            <h2 className="landing-heading mt-4">From thought to stream.</h2>
          </Reveal>

          <ol className="mt-12 space-y-10">
            {STEPS.map((step, i) => (
              <Reveal key={step.index} delay={i * 90}>
                <li className="flex gap-5">
                  <span className="select-none pt-1 font-light tabular-nums tracking-tight text-landing-note-violet/70">
                    {step.index}
                  </span>
                  <div>
                    <h3 className="landing-step-title">{step.title}</h3>
                    <p className="landing-body mt-2 max-w-sm">{step.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
