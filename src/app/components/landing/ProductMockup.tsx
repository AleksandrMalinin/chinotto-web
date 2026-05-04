import { Section } from "./Section";
import { Container } from "./Container";
import mainMockupImg from "@/assets/chinotto-main.webp";
import previewMockupImg from "@/assets/chinotto-preview.webp";
import { MobileMockupPair } from "./MobileDeviceMockup";

const screenshotCardClass =
  "rounded-2xl overflow-hidden border border-landing-card-border shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(139,148,200,0.08)]";

const easeLuxury = "ease-[cubic-bezier(0.33,1,0.32,1)]";

const transitionLayers =
  `transition-[opacity,filter,box-shadow] duration-[580ms] ${easeLuxury} motion-reduce:duration-200 motion-reduce:ease-linear`;

const dimSibling =
  "lg:group-hover/mock:opacity-[0.48] lg:group-hover/mock:brightness-[0.91] lg:group-hover/mock:saturate-[0.86]";

const focusLift =
  "lg:hover:!opacity-100 lg:hover:!brightness-100 lg:hover:!saturate-100 lg:hover:z-[60] lg:hover:shadow-[0_42px_100px_-32px_rgba(0,0,0,0.48),0_0_0_1px_rgba(139,148,200,0.12)]";

/** Anchored to page bg (`--landing-bg`): subtle cool lift only, not a mid grey-blue wash on black. */
const mockupStageClass =
  "rounded-[1.75rem] border border-landing-card-border bg-gradient-to-b from-[color-mix(in_srgb,var(--landing-bg)_93%,rgb(100,118,172)_7%)] via-[color-mix(in_srgb,var(--landing-bg)_97%,rgb(82,96,148)_3%)] to-transparent px-4 py-8 shadow-[inset_0_1px_0_0_rgba(139,148,200,0.035)] sm:px-6 sm:py-10 lg:px-5 lg:pb-14 lg:pt-11";

/**
 * `lg+`: Mac overlap first, then iPhone centered below. `<lg` on desktop route: phone only (no Mac row).
 * Mobile homepage (`PlaceholderLandingPage`): phone between copy and CTAs — uses `MobileMockupFlip` from `./MobileDeviceMockup` (not imported here) so mobile landing JS does not pull Mac screenshot assets.
 */
export function ProductMockupVisuals({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-visible ${className}`.trim()}>
      <div className={`relative mx-auto w-full max-w-[1152px] ${mockupStageClass}`}>
        {/* md desktop route, viewport &lt; lg: phone pair only (tablets / narrow windows). */}
        <div className="flex justify-center px-2 lg:hidden">
          <MobileMockupPair />
        </div>

        {/* lg+: Mac overlap, then mobile pair — rhythm from margin only. */}
        <div className="relative mx-auto hidden w-full flex-col items-center pb-2 pt-12 lg:flex">
          <div className="flex w-full justify-center px-1">
            <div className="group/mock relative w-[1050px] max-w-[1050px] shrink-0 pb-10 pt-2">
              <figure
                className={`relative z-0 w-[562px] max-w-none opacity-[0.96] ${dimSibling} ${focusLift} ${transitionLayers} ${screenshotCardClass}`}
              >
                <img
                  src={previewMockupImg}
                  alt="Chinotto — list and preview column"
                  className="pointer-events-none block h-auto w-full select-none"
                  draggable={false}
                />
              </figure>

              <figure
                className={`absolute right-12 top-[-50px] z-20 w-[605px] max-w-none opacity-100 ${dimSibling} ${focusLift} ${transitionLayers} ${screenshotCardClass}`}
              >
                <img
                  src={mainMockupImg}
                  alt="Chinotto — capture field and stream"
                  className="pointer-events-none block h-auto w-full select-none"
                  draggable={false}
                />
              </figure>
            </div>
          </div>

          <div className="mx-auto mt-12 w-full max-w-[920px] border-t border-landing-card-border px-4 pt-12 pb-2 lg:mt-14 lg:pt-14">
            <MobileMockupPair />
          </div>
        </div>
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
