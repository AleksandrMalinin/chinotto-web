import { useState } from "react";
import { Section } from "./Section";
import { Container } from "./Container";
import mainMockupImg from "@/assets/chinotto-main.png";
import mobileMainImg from "@/assets/chinotto-mobile-main.png";
import mobilePreviewImg from "@/assets/chinotto-mobile-preview.png";
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

/** Anchored to page bg (`--landing-bg`): subtle cool lift only, not a mid grey-blue wash on black. */
const mockupStageClass =
  "rounded-[1.75rem] border border-landing-card-border bg-gradient-to-b from-[color-mix(in_srgb,var(--landing-bg)_93%,rgb(100,118,172)_7%)] via-[color-mix(in_srgb,var(--landing-bg)_97%,rgb(82,96,148)_3%)] to-transparent px-4 py-8 shadow-[inset_0_1px_0_0_rgba(139,148,200,0.035)] sm:px-6 sm:py-10 lg:px-5 lg:pb-14 lg:pt-11";

const phoneBezel =
  "rounded-[2.75rem] border border-landing-card-border bg-[#101014] p-[10px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(139,148,200,0.08)]";

const phoneScreen =
  "relative overflow-hidden rounded-[2.35rem] aspect-[9/19] w-full bg-gradient-to-b from-white/[0.08] to-white/[0.02]";

type MobilePhoneMockupProps = {
  className?: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
};

/**
 * Device frame; pass `screenshotSrc` for the in-screen capture (`chinotto-mobile-preview` / `chinotto-mobile-main`).
 */
export function MobilePhoneMockup({
  className = "",
  screenshotSrc,
  screenshotAlt = "Chinotto on iPhone",
}: MobilePhoneMockupProps) {
  return (
    <figure
      className={`mx-auto w-full max-w-[260px] ${className}`.trim()}
      aria-hidden={screenshotSrc ? undefined : true}
    >
      <div className={phoneBezel}>
        <div className={phoneScreen}>
          {screenshotSrc ? (
            <img
              src={screenshotSrc}
              alt={screenshotAlt}
              className="absolute inset-0 h-full w-full object-cover object-top pointer-events-none select-none"
              draggable={false}
            />
          ) : (
            <div className="absolute inset-0" role="presentation" />
          )}
        </div>
      </div>
    </figure>
  );
}

const placeholderFlipPhoneClass =
  "w-full max-w-[min(260px,88vw)] sm:max-w-[240px] lg:max-w-[260px]";

/**
 * One phone on the mobile placeholder landing; tap swaps preview screenshot ↔ main.
 */
export function MobileMockupFlip({ className = "" }: { className?: string }) {
  const [showMain, setShowMain] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShowMain((v) => !v)}
      aria-label={
        showMain
          ? "Show list and preview screen"
          : "Show capture and stream screen"
      }
      className={`mx-auto block w-full max-w-[min(260px,88vw)] cursor-pointer rounded-[3rem] border-0 bg-transparent p-0 text-left shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg sm:max-w-[240px] ${className}`.trim()}
      data-umami-event="mobile-mockup-flip"
    >
      <MobilePhoneMockup
        screenshotSrc={showMain ? mobileMainImg : mobilePreviewImg}
        screenshotAlt=""
        className={placeholderFlipPhoneClass}
      />
    </button>
  );
}

/**
 * Two iPhone frames; optional straight divider centered between them on the row axis.
 */
export function MobileMockupPair({
  className = "",
  showDivider = true,
}: {
  className?: string;
  showDivider?: boolean;
}) {
  const phoneClass =
    "w-full max-w-[min(260px,88vw)] sm:max-w-[240px] lg:max-w-[260px]";

  return (
    <div
      role="group"
      aria-label="Chinotto on iPhone — preview and main"
      className={`${className}`.trim()}
    >
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-3 lg:gap-4">
        <MobilePhoneMockup
          screenshotSrc={mobilePreviewImg}
          screenshotAlt="Chinotto on iPhone — list and preview"
          className={phoneClass}
        />

        {showDivider ? (
          <div
            className="h-px w-[min(11rem,70vw)] shrink-0 bg-[rgba(139,148,200,0.2)] sm:h-40 sm:w-px sm:bg-gradient-to-b sm:from-transparent sm:via-[rgba(139,148,200,0.28)] sm:to-transparent"
            aria-hidden
          />
        ) : null}

        <MobilePhoneMockup
          screenshotSrc={mobileMainImg}
          screenshotAlt="Chinotto on iPhone — capture and stream"
          className={phoneClass}
        />
      </div>
    </div>
  );
}

/**
 * `lg+`: Mac overlap first, then iPhone centered below. `<lg` on desktop route: phone only (no Mac row).
 * Mobile homepage (`PlaceholderLandingPage`): phone between copy and CTAs.
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
                  className="block h-auto w-full pointer-events-none select-none"
                  draggable={false}
                />
              </figure>

              <figure
                className={`absolute right-12 top-[-50px] z-20 w-[605px] max-w-none opacity-100 ${dimSibling} ${focusLift} ${transitionLayers} ${screenshotCardClass}`}
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
