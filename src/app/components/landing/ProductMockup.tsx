import { Section } from "./Section";
import { Container } from "./Container";

import mainMockupImg from "@/assets/chinotto-main.png";
import previewMockupImg from "@/assets/chinotto-preview.png";

const screenshotCardClass =
  "rounded-2xl overflow-hidden border border-landing-card-border shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(139,148,200,0.08)]";

const cardMotion =
  "transition-transform duration-200 ease-out hover:-translate-y-1";

const mockupMax =
  "w-full max-w-xl mx-auto lg:max-w-[1050px]";

export function ProductMockup() {
  return (
    <Section>
      <Container size="6xl" className="overflow-visible">
        <div
          className={`relative ${mockupMax} flex flex-col items-center gap-8 lg:block lg:min-h-[340px] lg:pt-14`}
        >
          <div
            className={`relative z-0 order-2 lg:order-none w-full max-w-xl lg:w-[562px] lg:max-w-none opacity-100 lg:opacity-[0.95] ${cardMotion} ${screenshotCardClass}`}
          >
            <img
              src={previewMockupImg}
              alt="Chinotto — current interface preview"
              className="block h-auto w-full"
            />
          </div>
          <div
            className={`relative z-20 w-full max-w-xl lg:absolute lg:right-0 lg:top-[-50px] lg:w-[605px] lg:max-w-none ${cardMotion} ${screenshotCardClass}`}
          >
            <img
              src={mainMockupImg}
              alt="Chinotto main view — thought capture and entries"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
