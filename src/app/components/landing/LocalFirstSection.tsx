import {
  localFirstHeadingLine1,
  localFirstHeadingLine2,
} from "../../content/continuity";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const VALUES = [
  {
    title: "Yours by default",
    body: "Thoughts live on your device. Nothing leaves until you turn on sync.",
  },
  {
    title: "Instant",
    body: "No network, no spinner. Capture is as fast as the thought itself.",
  },
  {
    title: "No account",
    body: "Sign in with Apple only to sync. There is no Chinotto account to create.",
  },
] as const;

export function LocalFirstSection() {
  return (
    <Section id="local-first" className="!py-12 md:!py-20 lg:!py-24">
      <div className="mx-auto w-full max-w-[1000px] px-1 text-center">
        <Reveal>
          <p className="landing-eyebrow">Local-first</p>
          <h2 className="landing-heading landing-copy-narrow mx-auto mt-3 sm:mt-4">
            {localFirstHeadingLine1}
            <br />
            {localFirstHeadingLine2}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-landing-card-border bg-landing-card-border sm:grid-cols-3 sm:mt-14">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 90}>
              <div className="h-full bg-landing-bg px-7 py-9 text-left">
                <h3 className="landing-step-title text-base">{value.title}</h3>
                <p className="landing-body mt-3">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
