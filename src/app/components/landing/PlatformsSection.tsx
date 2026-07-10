import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { MacWindowMockup, MobilePhoneMockup } from "./DeviceMockup";
import { showcaseGridClass } from "./ScreenshotFrame";
import { productScreenshots } from "../../content/productScreenshots";
import { useMinMd } from "../../hooks/useMinMd";
import { cn } from "../ui/utils";
import {
  desktopPlatformExtras,
  desktopSpacesNote,
  mobilePlatformExtras,
  optionalSyncBody,
  platformLandingRoles,
  platformRoles,
  platformVisualCaptions,
  platformsEyebrow,
  platformsHeadingLine1,
  platformsHeadingLine2,
  platformsIntro,
} from "../../content/continuity";

const PLATFORM_KEYS = ["desktop", "mobile"] as const;

function MobilePlatformVisual() {
  const { src, alt } = productScreenshots.platformMobile;
  const widget = productScreenshots.widgetMedium;

  return (
    <div
      role="group"
      aria-label="Chinotto on mobile — in the app and home screen widget"
      className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-end sm:gap-3 lg:gap-5"
    >
      <div className="flex flex-col items-center">
        <MobilePhoneMockup screenshotSrc={src} screenshotAlt={alt} />
        <p className="landing-caption mt-3 text-center">In the app</p>
      </div>

      <div className="flex flex-col items-center">
        <MobilePhoneMockup
          screenshotSrc={widget.src}
          screenshotAlt={widget.alt}
        />
        <p className="landing-caption mt-3 text-center">Medium widget</p>
      </div>
    </div>
  );
}

function PlatformVisual({ platform }: { platform: (typeof PLATFORM_KEYS)[number] }) {
  if (platform === "mobile") {
    return <MobilePlatformVisual />;
  }

  const { src, alt } = productScreenshots.platformDesktop;
  return <MacWindowMockup src={src} alt={alt} />;
}

/** Mobile pocket + desktop return — two experiences, one stream. */
export function PlatformsSection() {
  const isDesktop = useMinMd();
  const platformKeys = isDesktop
    ? PLATFORM_KEYS
    : ([...PLATFORM_KEYS].reverse() as typeof PLATFORM_KEYS);

  return (
    <Section id="two-experiences" className="!py-12 md:!py-20 lg:!py-24">
      <div className="mx-auto w-full max-w-[1100px] px-1">
        <Reveal className="text-center">
          <p className="landing-eyebrow">{platformsEyebrow}</p>
          <h2 className="landing-heading landing-copy-narrow mt-3 sm:mt-4 md:mx-auto">
            {platformsHeadingLine1}
            <br />
            {platformsHeadingLine2}
          </h2>
          <p className="landing-body landing-copy-narrow mx-auto mt-5 sm:mt-6">
            {platformsIntro}
          </p>
          <p className="landing-caption landing-copy-narrow mx-auto mt-3 text-landing-muted/75">
            {optionalSyncBody}
          </p>
        </Reveal>

        <div className="mt-12 space-y-16 sm:mt-16 lg:space-y-24">
          {platformKeys.map((key, i) => {
            const imageFirst = i % 2 === 0;

            return (
              <div
                key={key}
                className={cn(
                  "grid grid-cols-1 items-center gap-10 lg:gap-20",
                  key === "desktop"
                    ? showcaseGridClass(imageFirst)
                    : "lg:grid-cols-2",
                )}
              >
                <Reveal
                  className={cn("min-w-0", !imageFirst && "lg:order-2")}
                  delay={i * 40}
                >
                  <PlatformVisual platform={key} />
                </Reveal>

                <Reveal
                  className={cn("min-w-0", !imageFirst && "lg:order-1")}
                  delay={i * 40 + 60}
                >
                  <div className="border-l border-landing-card-border pl-6 lg:max-w-md">
                    <p className="landing-caption mb-2">
                      {platformVisualCaptions[key]}
                    </p>
                    <h3 className="landing-step-title">
                      {platformRoles[key].title}
                    </h3>
                    <p className="landing-body mt-3">
                      {platformLandingRoles[key]}
                    </p>
                    {key === "desktop" ? (
                      <>
                        <ul className="landing-caption mt-4 space-y-1.5 text-landing-muted/80">
                          {desktopPlatformExtras.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                        <p className="landing-caption mt-4 text-landing-muted/75">
                          {desktopSpacesNote}
                        </p>
                      </>
                    ) : (
                      <ul className="landing-caption mt-4 space-y-1.5 text-landing-muted/80">
                        {mobilePlatformExtras.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
