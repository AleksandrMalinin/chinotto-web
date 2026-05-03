import { Section } from "./Section";
import { Container } from "./Container";
import mainMockupImg from "@/assets/chinotto-main.png";
import previewMockupImg from "@/assets/chinotto-preview.png";

const screenshotCardClass =
  "rounded-2xl overflow-hidden border border-landing-card-border shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(139,148,200,0.08)]";

const easeLuxury = "ease-[cubic-bezier(0.33,1,0.32,1)]";

const transitionLayers =
  `transition-[opacity,filter,box-shadow] duration-[580ms] ${easeLuxury} motion-reduce:duration-200 motion-reduce:ease-linear`;

const dimSibling =
  "lg:group-hover/mock:opacity-[0.48] lg:group-hover/mock:brightness-[0.91] lg:group-hover/mock:saturate-[0.86]";

const focusLift =
  "lg:hover:!opacity-100 lg:hover:!brightness-100 lg:hover:!saturate-100 lg:hover:z-[60] lg:hover:shadow-[0_42px_100px_-32px_rgba(0,0,0,0.48),0_0_0_1px_rgba(139,148,200,0.12)]";

const mockupMax = "w-full max-w-xl mx-auto lg:max-w-[1050px]";

/**
 * Overlapping screenshots at full scale.
 * Desktop: soft spotlight between windows (opacity / luminance — no positional jump).
 */
export function ProductMockupVisuals({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-visible ${className}`.trim()}>
      <div
        className={`relative ${mockupMax} group/mock flex flex-col items-center gap-8 lg:block lg:min-h-[340px] lg:pt-14`}
      >
        <figure
          className={`relative z-0 order-2 lg:order-none w-full max-w-xl lg:w-[562px] lg:max-w-none opacity-100 lg:opacity-[0.96] ${dimSibling} ${focusLift} ${transitionLayers} ${screenshotCardClass}`}
        >
          <img
            src={previewMockupImg}
            alt="Chinotto — list and preview column"
            className="block h-auto w-full pointer-events-none select-none"
            draggable={false}
          />
        </figure>

        <figure
          className={`relative z-20 w-full max-w-xl lg:absolute lg:right-0 lg:top-[-50px] lg:w-[605px] lg:max-w-none opacity-100 ${dimSibling} ${focusLift} ${transitionLayers} ${screenshotCardClass}`}
        >
          <img
            src={mainMockupImg}
            alt="Chinotto — capture field and stream"
            className="block h-auto w-full pointer-events-none select-none"
            draggable={false}
          />
        </figure>
      </div>
    </div>
  );
}

/** Landing strip: same shell as original route; inner visuals use ProductMockupVisuals above. */
export function ProductMockup() {
  return (
    <Section>
      <Container size="6xl" className="overflow-visible">
        <ProductMockupVisuals />
      </Container>
    </Section>
  );
}
