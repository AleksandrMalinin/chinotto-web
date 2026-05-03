import { useRef } from "react";
import { useNavigate } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";
import {
  CHINOTTO_IOS_APP_STORE_URL,
  CHINOTTO_MAC_DOWNLOAD_URL,
} from "../../content/links";

const LONG_PRESS_MS = 600;

/** Headline carries capture/revisit; subtitle is only product context + sync line—no repeated idea. */
export function Hero() {
  const navigate = useNavigate();
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();

  const clearTimer = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const onPointerDown = () => {
    clearTimer();
    longPressTimer.current = setTimeout(() => {
      longPressTimer.current = null;
      navigate("/showcase");
    }, LONG_PRESS_MS);
  };

  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <button
            type="button"
            className="placeholder-logo-wrap rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg touch-manipulation"
            onPointerDown={onPointerDown}
            onPointerUp={clearTimer}
            onPointerLeave={clearTimer}
            onPointerCancel={clearTimer}
            aria-label="Hold to open logo showcase"
          >
            <ChinottoLogo size={120} className="text-landing-accent" />
          </button>
        </div>
        <h1 className="text-6xl font-light tracking-tight mb-6 text-landing-foreground leading-[1.08]">
          Capture first.
          <br />
          <span className="opacity-[0.85]">Revisit later.</span>
        </h1>
        <p className="text-xl font-light mb-12 max-w-2xl mx-auto text-[#A7AEC4] opacity-80 leading-relaxed">
          <span className="block">
            A local-first thinking tool for Mac and iPhone.
          </span>
          <span className="block mt-5 text-lg opacity-90">
            Your thoughts stay with you—across devices, when you choose.
          </span>
        </p>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                App Store — iPhone
              </a>
            ) : null}
          </div>
          <a
            href="#principles"
            className="btn-landing-secondary px-8 py-3 text-lg inline-block"
            data-umami-event="learn-more-hero"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
