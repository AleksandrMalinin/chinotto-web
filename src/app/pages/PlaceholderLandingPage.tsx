import { useState } from "react";
import { ChinottoLogo } from "../components/ChinottoLogo";
import {
  CTASection,
  FloatingBlobs,
  Footer,
  Header,
  HeroTrustLine,
  LandingEnhancements,
  LandingStorySections,
  MacDownloadMobileDialog,
  MobileMockupFlip,
} from "../components/landing";
import { CHINOTTO_IOS_APP_STORE_URL } from "../content/links";
import {
  heroBody,
  heroSloganLine1,
  heroSloganLine2,
  heroSubhead,
} from "../content/continuity";

export function PlaceholderLandingPage() {
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();
  const [desktopModalOpen, setDesktopModalOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-landing-bg">
      <FloatingBlobs variant="background" />

      <Header logoHref="/" />

      <main className="relative z-10 flex flex-1 flex-col">
        <section
          id="hero"
          className="flex w-full flex-col items-center px-6 pb-8 pt-[4.25rem] text-center sm:px-8 sm:pb-10"
        >
          <button
            type="button"
            className="placeholder-logo-wrap mb-10 block rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
            aria-label="Top of page"
            data-umami-event="hero-logo-mobile"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChinottoLogo size={96} className="text-landing-accent" />
          </button>
          <h1 className="landing-display mb-4">
            {heroSloganLine1}
            <br />
            <span className="opacity-[0.85]">{heroSloganLine2}</span>
          </h1>
          <p className="landing-subhead mx-auto mb-2 max-w-[20rem] sm:max-w-xs">
            {heroSubhead}
          </p>
          <p className="landing-body mx-auto mb-8 max-w-[20rem] sm:max-w-xs">
            {heroBody}
          </p>
          <div className="mb-10 w-full max-w-[280px] px-1">
            <MobileMockupFlip />
          </div>
          <div className="flex w-full max-w-[280px] flex-col items-center gap-3">
            {iosStoreUrl ? (
              <a
                href={iosStoreUrl}
                className="btn-landing-primary inline-block w-full px-6 py-3 text-center text-base"
                data-umami-event="app-store-placeholder"
                rel="noreferrer"
                target="_blank"
              >
                Get on iPhone
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => setDesktopModalOpen(true)}
              className={
                iosStoreUrl
                  ? "btn-landing-secondary w-full px-6 py-3 text-base text-center"
                  : "btn-landing-primary w-full px-6 py-3 text-base text-center"
              }
              data-umami-event="download-placeholder"
            >
              Download for Mac
            </button>
          </div>
          <HeroTrustLine className="mt-6" />
        </section>

        <LandingStorySections />
        <CTASection />
      </main>

      <Footer />

      <MacDownloadMobileDialog
        open={desktopModalOpen}
        onClose={() => setDesktopModalOpen(false)}
      />

      <LandingEnhancements />
    </div>
  );
}
