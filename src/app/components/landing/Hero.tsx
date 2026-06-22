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
    <section id="hero" className="py-20 px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <button
            type="button"
            className="placeholder-logo-wrap inline-flex rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
            aria-label="Top of page"
            data-umami-event="hero-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ChinottoLogo size={120} className="text-landing-accent" />
          </button>
        </div>
        <h1 className="landing-display mb-6">
          {heroSloganLine1}
          <br />
          <span className="opacity-[0.85]">{heroSloganLine2}</span>
        </h1>
        <p className="landing-subhead mx-auto max-w-2xl">{heroSubhead}</p>
        <p className="landing-body mx-auto mt-3 mb-10 max-w-xl">{heroBody}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={CHINOTTO_MAC_DOWNLOAD_URL}
            className="btn-landing-primary inline-block px-8 py-3 text-lg"
            data-umami-event="download-hero"
          >
            Download for Mac
          </a>
          {iosStoreUrl ? (
            <a
              href={iosStoreUrl}
              className="btn-landing-secondary inline-block px-8 py-3 text-lg"
              data-umami-event="download-hero-ios"
              rel="noreferrer"
              target="_blank"
            >
              Get on iPhone
            </a>
          ) : null}
        </div>
        <HeroTrustLine className="mt-7" />
      </div>
    </section>
  );
}
