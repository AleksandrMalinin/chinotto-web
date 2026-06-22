import { Section } from "./Section";
import { Reveal } from "./Reveal";

const LINES = [
  "Not a notes app.",
  "Not a workspace.",
  "Not a task manager.",
] as const;

export function NotForSection() {
  return (
    <Section id="positioning" className="!py-16 md:!py-20 lg:!py-24">
      <div className="mx-auto w-full max-w-[36rem] px-2 text-center">
        <Reveal>
          <div className="space-y-2">
            {LINES.map((line) => (
              <p key={line} className="landing-body text-landing-muted/80">
                {line}
              </p>
            ))}
          </div>
          <p className="landing-subhead mt-8 text-landing-foreground">
            Threads unfold.
            <br />
            Context returns.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
