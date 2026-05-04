import { Link } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";
import { productUpdates } from "../../content/updates";
import {
  CHINOTTO_IOS_APP_STORE_URL,
  CHINOTTO_MAC_DOWNLOAD_URL,
} from "../../content/links";
import { cn } from "../ui/utils";

/** Headline + one calm line of context; CTAs stay binary—Mac vs iPhone. */
export function Hero() {
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();
  const latestUpdate = productUpdates[0];
  const showMilestoneLine = Boolean(latestUpdate?.milestone);

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Link
            to="/showcase"
            className="placeholder-logo-wrap inline-flex rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
            aria-label="Logo showcase"
            data-umami-event="logo-showcase-hero"
          >
            <ChinottoLogo size={120} className="text-landing-accent" />
          </Link>
        </div>
        <h1 className="text-6xl font-light tracking-tight mb-6 text-landing-foreground leading-[1.08]">
          Capture first.
          <br />
          <span className="opacity-[0.85]">Revisit later.</span>
        </h1>
        <p
          className={cn(
            "mx-auto max-w-2xl text-xl font-light leading-relaxed text-[#A7AEC4] opacity-80",
            showMilestoneLine ? "mb-8" : "mb-12",
          )}
        >
          A minimal space to capture your thoughts.
        </p>
        {showMilestoneLine && latestUpdate ? (
          <div className="mx-auto mb-11 max-w-lg border-t border-white/[0.1] pt-7">
            <p className="text-center text-[13px] font-light leading-relaxed tracking-[0.02em]">
              <span className="tabular-nums tracking-tight text-landing-note-violet">{`v${latestUpdate.version}`}</span>
              <span className="text-landing-muted/88">
                {" — Mac and iPhone, sync optional · "}
              </span>
              <Link
                to="/changelog"
                className="text-landing-accent underline decoration-transparent underline-offset-[0.15em] transition-colors hover:text-landing-accent-hover hover:decoration-landing-accent/35"
              >
                Updates
              </Link>
            </p>
          </div>
        ) : null}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={CHINOTTO_MAC_DOWNLOAD_URL}
            className="btn-landing-primary px-8 py-3 text-lg inline-block"
            data-umami-event="download-hero"
          >
            Download for Mac
          </a>
          {iosStoreUrl ? (
            <a
              href={iosStoreUrl}
              className="btn-landing-secondary px-8 py-3 text-lg inline-block"
              data-umami-event="download-hero-ios"
              rel="noreferrer"
              target="_blank"
            >
              Get on iPhone
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
