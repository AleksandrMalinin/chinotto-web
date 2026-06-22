import { useState } from "react";
import { ChinottoLogo } from "../components/ChinottoLogo";
import {
  CTASection,
  FloatingBlobs,
  Footer,
  Header,
  HeroTrustLine,
  LandingStorySections,
  MacDownloadMobileDialog,
  MobileMockupFlip,
} from "../components/landing";
import {
  CHINOTTO_IOS_APP_STORE_URL,
} from "../content/links";
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
        {/* Mobile hero: logo, headline, mockup, CTAs */}
        <div className="flex flex-col items-center px-8 pb-10 pt-[70px]">
          <button
            type="button"
            className="placeholder-logo-wrap mb-14 block rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
            aria-label="Top of page"
            data-umami-event="hero-logo-mobile"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChinottoLogo size={100} className="text-landing-accent" />
          </button>
          <h1 className="landing-display mb-5 text-center">
            {heroSloganLine1}
            <br />
            <span className="opacity-[0.85]">{heroSloganLine2}</span>
          </h1>
          <p className="landing-subhead mx-auto mb-3 max-w-[340px] text-center">
            {heroSubhead}
          </p>
          <p className="landing-body mx-auto mb-8 max-w-[340px] text-center">
            {heroBody}
          </p>
          <div className="mb-10 w-full px-1">
            <MobileMockupFlip />
          </div>
          <div className="flex flex-col items-center gap-3 w-full max-w-[280px]">
            {iosStoreUrl ? (
              <a
                href={iosStoreUrl}
                className="btn-landing-primary w-full px-6 py-3 text-base text-center inline-block"
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
          <HeroTrustLine className="mt-7" />
        </div>

        <LandingStorySections />
        <CTASection />
      </main>

      <Footer />

      <MacDownloadMobileDialog
        open={desktopModalOpen}
        onClose={() => setDesktopModalOpen(false)}
      />
    </div>
  );
}
