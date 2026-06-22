import { useState } from "react";
import mobileMainImg from "@/assets/chinotto-mobile-main.webp";
import mobilePreviewImg from "@/assets/chinotto-mobile-preview.webp";
import { MobilePhoneMockup } from "./DeviceMockup";
import { mockupPhoneHoverClass } from "./ScreenshotFrame";
import { cn } from "../ui/utils";

export { MacWindowMockup, MobilePhoneMockup, PHONE_MOCKUP_CLASS } from "./DeviceMockup";

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
      className={`mx-auto block w-fit cursor-pointer rounded-[3rem] border-0 bg-transparent p-0 text-left shadow-none focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg ${className}`.trim()}
      data-umami-event="mobile-mockup-flip"
    >
      <div className={cn("relative", mockupPhoneHoverClass)}>
        <div
          className={cn(
            "motion-safe:transition-opacity motion-safe:duration-200 motion-reduce:transition-none",
            showMain ? "pointer-events-none opacity-0" : "opacity-100",
          )}
          aria-hidden={showMain}
        >
          <MobilePhoneMockup
            screenshotSrc={mobilePreviewImg}
            screenshotAlt="Chinotto on iPhone — list and preview"
            hoverable={false}
          />
        </div>
        <div
          className={cn(
            "absolute inset-0 flex justify-center motion-safe:transition-opacity motion-safe:duration-200 motion-reduce:transition-none",
            showMain ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={!showMain}
        >
          <MobilePhoneMockup
            screenshotSrc={mobileMainImg}
            screenshotAlt="Chinotto on iPhone — capture and stream"
            hoverable={false}
          />
        </div>
      </div>
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
        />
      </div>
    </div>
  );
}
