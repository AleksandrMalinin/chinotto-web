import { Section } from "./Section";
import { Reveal } from "./Reveal";
import {
  problemBody,
  problemContrastLine1,
  problemContrastLine2,
  problemEyebrow,
  problemHeading,
} from "../../content/continuity";

export function ProblemSection() {
  return (
    <Section id="problem" className="!py-12 md:!py-16">
      <div className="landing-copy-medium px-1 text-center">
        <Reveal>
          <p className="landing-eyebrow">{problemEyebrow}</p>
          <p className="landing-subhead mx-auto mt-4 max-w-md">
            {problemContrastLine1}
            <br />
            <span className="opacity-[0.88]">{problemContrastLine2}</span>
          </p>
          <h2 className="landing-heading mx-auto mt-5 max-w-md sm:mt-6">
            {problemHeading}
          </h2>
          <p className="landing-body mx-auto mt-4 max-w-md sm:mt-5">{problemBody}</p>
        </Reveal>
      </div>
    </Section>
  );
}
