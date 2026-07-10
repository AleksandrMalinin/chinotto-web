import { useState } from "react";
import { ChinottoLogo } from "../components/ChinottoLogo";
import {
  CTASection,
  FloatingBlobs,
  Footer,
  Header,
  HeroTrustLine,
  MacDownloadMobileDialog,
  MobileLandingStorySections,
  MobileMockupFlip,
  MobileStickyCta,
} from "../components/landing";
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
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-landing-bg">
      <FloatingBlobs variant="background" />

      <Header logoHref="/" />

      <main className="relative z-10 flex flex-1 flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
        <section
          id="hero"
          className="flex w-full flex-col items-center px-6 pb-6 pt-[4.25rem] text-center sm:px-8"
        >
          <button
            type="button"
            className="placeholder-logo-wrap mb-8 block rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
            aria-label="Top of page"
            data-umami-event="hero-logo-mobile"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChinottoLogo size={88} className="text-landing-accent" />
          </button>
          <h1 className="landing-display mb-3">
            {heroSloganLine1}
            <br />
            <span className="opacity-[0.85]">{heroSloganLine2}</span>
          </h1>
          <p className="landing-subhead mx-auto mb-2 max-w-[20rem]">
            {heroMobileSubhead}
          </p>
          <p className="landing-body mx-auto mb-6 max-w-[20rem] text-landing-muted/85">
            {heroMobileBody}
          </p>

          {iosStoreUrl ? (
            <a
              href={iosStoreUrl}
              className="btn-landing-primary mb-8 inline-block w-full max-w-[280px] px-6 py-3 text-center text-base"
              data-umami-event="app-store-hero"
              rel="noreferrer"
              target="_blank"
            >
              Get on iPhone
            </a>
          ) : null}

          <div className="mb-6 w-full max-w-[260px] px-1">
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
          <HeroTrustLine className="mt-5" />
        </section>

        <MobileLandingStorySections />
        <CTASection />
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
