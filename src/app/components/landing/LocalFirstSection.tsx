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
    <Section id="local-first" className="!py-20 md:!py-28 lg:!py-32">
      <div className="mx-auto w-full max-w-[1000px] px-2 text-center">
        <Reveal>
          <p className="landing-eyebrow">Local-first</p>
          <h2 className="landing-heading mx-auto mt-4 max-w-[36rem]">
            Local-first isn&rsquo;t a feature.
            <br className="hidden sm:block" /> It&rsquo;s the whole point.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-landing-card-border bg-landing-card-border sm:grid-cols-3">
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
