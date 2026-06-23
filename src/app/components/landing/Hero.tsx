import { ChinottoLogo } from "../ChinottoLogo";
import {
  heroBody,
  heroSloganLine1,
  heroSloganLine2,
  heroSubhead,
} from "../../content/continuity";
import {
  CHINOTTO_IOS_APP_STORE_URL,
  CHINOTTO_MAC_DOWNLOAD_URL,
} from "../../content/links";
import { HeroTrustLine } from "./HeroTrustLine";

/** Lean copy — logo, slogan, continuity line, CTAs, trust note. */
export function Hero() {
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();

  return (
    <section id="hero" className="px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-7 flex justify-center sm:mb-8">
          <button
            type="button"
            className="placeholder-logo-wrap inline-flex rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
            aria-label="Top of page"
            data-umami-event="hero-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChinottoLogo size={112} className="text-landing-accent" />
          </button>
        </div>
        <h1 className="landing-display mb-5">
          {heroSloganLine1}
          <br />
          <span className="opacity-[0.85]">{heroSloganLine2}</span>
        </h1>
        <p className="landing-subhead mx-auto max-w-xl">{heroSubhead}</p>
        <p className="landing-body mx-auto mt-2 mb-9 max-w-md sm:mb-10">
          {heroBody}
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={CHINOTTO_MAC_DOWNLOAD_URL}
            className="btn-landing-primary inline-block px-8 py-3 text-base"
            data-umami-event="download-hero"
          >
            Download for Mac
          </a>
          {iosStoreUrl ? (
            <a
              href={iosStoreUrl}
              className="btn-landing-secondary inline-block px-8 py-3 text-base"
              data-umami-event="download-hero-ios"
              rel="noreferrer"
              target="_blank"
            >
              Get on iPhone
            </a>
          ) : null}
        </div>
        <HeroTrustLine className="mt-6 sm:mt-7" />
      </div>
    </section>
  );
}
