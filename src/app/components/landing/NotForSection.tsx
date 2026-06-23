import { Link } from "react-router";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { notForBody, notForLines } from "../../content/continuity";

export function NotForSection() {
  return (
    <Section id="positioning" className="!py-12 md:!py-16 lg:!py-20">
      <div className="landing-copy-medium px-1 text-center">
        <Reveal>
          <div className="space-y-2">
            {notForLines.map((line) => (
              <p key={line} className="landing-body text-landing-muted/80">
                {line}
              </p>
            ))}
          </div>
          <p className="landing-body mt-6 text-landing-muted/85">{notForBody}</p>
          <p className="landing-caption mt-7">
            <Link
              to="/manifesto"
              className="text-landing-accent underline decoration-transparent underline-offset-[0.15em] transition-colors hover:text-landing-accent-hover hover:decoration-landing-accent/35"
              data-umami-event="landing-manifesto"
            >
              Read the manifesto
            </Link>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
