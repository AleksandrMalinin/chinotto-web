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
            className="rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg touch-manipulation"
            onPointerDown={onPointerDown}
            onPointerUp={clearTimer}
            onPointerLeave={clearTimer}
            onPointerCancel={clearTimer}
            aria-label="Hold to open logo showcase"
          >
            <ChinottoLogo size={120} className="text-landing-accent" />
          </button>
        </div>
        <h1 className="text-6xl font-light tracking-tight mb-6 text-landing-foreground">
          Capture thoughts.
          <br />
          Recover context.
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-landing-muted">
          A minimal desktop thinking tool for instantly capturing thoughts and
          recovering context later. No organization required.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#download"
            className="btn-landing-primary px-8 py-3 text-lg inline-block"
          >
            Download for macOS
          </a>
          <a
            href="#principles"
            className="btn-landing-secondary px-8 py-3 text-lg inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
