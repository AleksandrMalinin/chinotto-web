import { Section } from "./Section";
import { Reveal } from "./Reveal";

const FAQ = [
  {
    question: "Do I need an account?",
    answer:
      "No. Chinotto works without signing in. Use Sign in with Apple only when you want sync across your devices.",
  },
  {
    question: "Where is my data?",
    answer:
      "On your device. Thoughts stay local until you turn on sync — nothing leaves by default.",
  },
  {
    question: "Desktop and mobile — the same app?",
    answer:
      "One stream, two roles. Desktop is for continuing threads — exploring ideas, reconnecting context, continuity over months. Mobile is a calm pocket for capture in the moment and gentle resurfacing later.",
  },
] as const;

export function FaqSection() {
  return (
    <Section id="faq" className="!py-16 md:!py-20 lg:!py-24">
      <div className="mx-auto w-full max-w-[40rem] px-2">
        <Reveal>
          <p className="landing-eyebrow text-center">Questions</p>
          <h2 className="landing-heading mt-4 text-center">Quick answers.</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-landing-card-border border-y border-landing-card-border">
          {FAQ.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <details className="group py-5">
                <summary className="landing-step-title flex cursor-pointer list-none items-center justify-between gap-4 text-left transition-colors marker:content-none group-open:text-landing-foreground-strong [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    className="shrink-0 text-landing-muted/50 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="landing-body mt-3 max-w-prose">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
