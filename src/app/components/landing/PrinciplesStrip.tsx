import { Section } from "./Section";

/** Strip: upfront capture, no forced structure, local-first, optional sync—scannable tags, no SaaS cadence. */
const PRINCIPLES = [
  "Capture first",
  "No structure upfront",
  "Local-first",
  "Sync when you choose",
  "No workspace overhead",
];

export function PrinciplesStrip() {
  return (
    <Section id="principles">
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5">
        {PRINCIPLES.map((principle, index) => (
          <span key={principle} className="flex items-center gap-x-3">
            <span className="text-xl font-light text-landing-foreground-strong tracking-tight">
              {principle}
            </span>
            {index < PRINCIPLES.length - 1 && (
              <span
                className="text-landing-muted text-xl select-none flex-shrink-0 opacity-40"
                aria-hidden
              >
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </Section>
  );
}
