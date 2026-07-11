import { useState } from "react";
import { Link } from "react-router";
import {
  CTASection,
  Footer,
  Header,
  HeroTrustLine,
  MacDownloadMobileDialog,
  MobileLandingStorySections,
  MobileMockupFlip,
  MobileStickyCta,
} from "../components/landing";
import { MobileSectionMenu } from "../components/landing/MobileSectionMenu";
import {
  HERO_LOGO_SIZE_MOBILE,
  HeroLogoLink,
  HeroLogoStage,
} from "../components/landing/HeroLogo";
import { CHINOTTO_IOS_APP_STORE_URL } from "../content/links";
import {
  heroMobileBody,
  heroMobileSubhead,
  heroSloganLine1,
  heroSloganLine2,
} from "../content/continuity";

/** iPhone-first landing — own narrative, not desktop sections stacked. */
export function MobileLandingPage() {
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();
  const [desktopModalOpen, setDesktopModalOpen] = useState(false);

  return (
    <div className="landing-mobile-page relative flex min-h-screen flex-col">
      <Header logoHref="/" />
      <MobileSectionMenu className="thread-nav--dock" />

      <main className="relative z-10 flex flex-1 flex-col overflow-x-clip pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
        <section
          id="hero"
          className="flex w-full flex-col items-center px-6 pb-6 text-center sm:px-8"
        >
          <HeroLogoStage>
            <HeroLogoLink
              size={HERO_LOGO_SIZE_MOBILE}
              umamiEvent="logo-showcase-hero-mobile"
            />
          </HeroLogoStage>
          <h1 className="landing-display mb-3">
            {heroSloganLine1}
            <br />
            <span className="opacity-[0.85]">{heroSloganLine2}</span>
          </h1>
          <p className="landing-subhead mx-auto mb-2 max-w-[20rem]">
            {heroMobileSubhead}
          </p>
          <p className="landing-body mx-auto mb-5 max-w-[20rem] text-landing-muted/85">
            {heroMobileBody}
          </p>

          {iosStoreUrl ? (
            <a
              href={iosStoreUrl}
              className="btn-landing-primary mb-6 inline-block w-full max-w-[280px] px-6 py-3 text-center text-base"
              data-umami-event="app-store-hero"
              rel="noreferrer"
              target="_blank"
            >
              Get on iPhone
            </a>
          ) : null}

          <div className="mb-5 w-full max-w-[260px] px-1">
            <MobileMockupFlip />
          </div>

          <button
            type="button"
            onClick={() => setDesktopModalOpen(true)}
            className="landing-caption text-landing-muted/70 underline decoration-transparent underline-offset-[0.15em] transition-colors hover:text-landing-muted hover:decoration-landing-muted/35"
            data-umami-event="download-hero-mac-link"
          >
            Also on Mac
          </button>
        </section>

        <MobileLandingStorySections />
        <CTASection />
        <div className="flex justify-center px-6 pb-6 text-center">
          <HeroTrustLine className="!border-t-0 !pt-0" />
        </div>
      </main>

      <Footer />

      <MacDownloadMobileDialog
        open={desktopModalOpen}
        onClose={() => setDesktopModalOpen(false)}
      />

      <MobileStickyCta />
    </div>
  );
}
