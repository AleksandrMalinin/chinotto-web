import { Link } from "react-router";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { notForBody, notForLines } from "../../content/continuity";
import { faqLinkClassName, faqNotForLinkLabel } from "../../content/faq";

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
              className={faqLinkClassName}
              data-umami-event="landing-manifesto"
            >
              Read the manifesto
            </Link>
            <span className="text-landing-muted/40" aria-hidden>
              {" "}
              ·{" "}
            </span>
            <Link
              to="/faq"
              className={faqLinkClassName}
              data-umami-event="landing-faq"
            >
              {faqNotForLinkLabel}
            </Link>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
