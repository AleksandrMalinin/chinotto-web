import { useRef } from "react";
import { useNavigate } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";

const LONG_PRESS_MS = 600;

export function Hero() {
  const navigate = useNavigate();
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        <p className="text-xl font-light mb-12 max-w-2xl mx-auto text-[#A7AEC4] opacity-80">
          A minimal desktop tool to capture thoughts and revisit them later.
          <br />
          No organization required.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/AleksandrMalinin/chinotto/releases/latest/download/Chinotto_1.0.0_aarch64.dmg"
            className="btn-landing-primary px-8 py-3 text-lg inline-block"
            data-umami-event="download-hero"
          >
            Download Chinotto{" "}
            <span className="text-base opacity-80">β</span>
          </a>
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
