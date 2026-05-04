import { useState } from "react";
import mobileMainImg from "@/assets/chinotto-mobile-main.webp";
import mobilePreviewImg from "@/assets/chinotto-mobile-preview.webp";

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
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-top"
              decoding="async"
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
