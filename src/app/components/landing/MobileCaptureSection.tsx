import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  mobileCaptureEyebrow,
  mobileCaptureHeading,
  mobileCaptureIntro,
  mobilePlatformExtras,
} from "../../content/continuity";

/** iPhone pocket role — hero already shows the app; bullets only here. */
export function MobileCaptureSection() {
  return (
    <Section id="pocket" className="!py-12">
      <div className="mx-auto w-full max-w-[22rem] px-1 text-center">
        <Reveal>
          <p className="landing-eyebrow">{mobileCaptureEyebrow}</p>
          <h2 className="landing-heading mt-3">{mobileCaptureHeading}</h2>
          <p className="landing-body mt-4">{mobileCaptureIntro}</p>
        </Reveal>

        <ul className="mt-8 space-y-3 text-left">
          {mobilePlatformExtras.map((line, i) => (
            <Reveal key={line} delay={80 + i * 50}>
              <li className="landing-body border-l border-landing-card-border pl-4 text-landing-muted/90">
                {line}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
