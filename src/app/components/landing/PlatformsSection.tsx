import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { MacWindowMockup, MobilePhoneMockup } from "./DeviceMockup";
import { productScreenshots } from "../../content/productScreenshots";
import { useMinMd } from "../../hooks/useMinMd";
import { cn } from "../ui/utils";
import {
  continuityThreads,
  manifestoPlatformRoles,
  platformRoles,
  platformVisualCaptions,
  platformsEyebrow,
  platformsHeading,
} from "../../content/continuity";

const PLATFORM_KEYS = ["desktop", "mobile"] as const;

function PlatformVisual({ platform }: { platform: (typeof PLATFORM_KEYS)[number] }) {
  if (platform === "mobile") {
    const { src, alt } = productScreenshots.platformMobile;
    return (
      <MobilePhoneMockup
        screenshotSrc={src}
        screenshotAlt={alt}
      />
    );
  }

  const { src, alt } = productScreenshots.platformDesktop;
  return <MacWindowMockup src={src} alt={alt} />;
}

/** Desktop / mobile roles — full positioning copy with product shots. */
export function PlatformsSection() {
  const isDesktop = useMinMd();
  const platformKeys = isDesktop
    ? PLATFORM_KEYS
    : ([...PLATFORM_KEYS].reverse() as typeof PLATFORM_KEYS);

  return (
    <Section id="platforms" className="!py-20 md:!py-28 lg:!py-32">
      <div className="mx-auto w-full max-w-[1100px] px-2">
        <Reveal className="text-center">
          <p className="landing-eyebrow">{platformsEyebrow}</p>
          <h2 className="landing-heading mx-auto mt-4 max-w-[34rem]">
            {platformsHeading}
          </h2>
          <p className="landing-body mx-auto mt-6 max-w-[34rem]">
            {continuityThreads}
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 lg:space-y-24">
          {platformKeys.map((key, i) => {
            const imageFirst = i % 2 === 0;

            return (
              <div
                key={key}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal
                  className={cn(!imageFirst && "lg:order-2")}
                  delay={i * 40}
                >
                  <PlatformVisual platform={key} />
                </Reveal>

                <Reveal
                  className={cn(!imageFirst && "lg:order-1")}
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
                      {manifestoPlatformRoles[key]}
                    </p>
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
