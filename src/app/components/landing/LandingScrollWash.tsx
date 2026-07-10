import { useEffect, useState } from "react";

const FADE_START = 140;
const FADE_END = 620;
const MAX_OPACITY = 0.92;

/** Desktop landing — cool ambient wash fades in after hero on scroll. */
export function LandingScrollWash() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;

    const update = () => {
      if (reducedMotion) {
        setOpacity(window.scrollY > FADE_START ? MAX_OPACITY : 0);
        return;
      }

      const t = (window.scrollY - FADE_START) / (FADE_END - FADE_START);
      setOpacity(Math.min(MAX_OPACITY, Math.max(0, t)));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (opacity <= 0) return null;

  return (
    <div
      className="landing-scroll-wash pointer-events-none fixed inset-0 z-0"
      aria-hidden
      style={{ opacity }}
    />
  );
}
