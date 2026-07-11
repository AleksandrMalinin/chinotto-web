import { useEffect, useState } from "react";
import { cn } from "../ui/utils";

const CONFIG = {
  desktop: { fadeStart: 140, fadeEnd: 620, minOpacity: 0, maxOpacity: 0.92 },
  mobile: { fadeStart: 0, fadeEnd: 420, minOpacity: 1, maxOpacity: 1 },
} as const;

type LandingScrollWashProps = {
  variant?: keyof typeof CONFIG;
};

/** Landing ambient wash — scroll-linked on desktop; always-on base on mobile. */
export function LandingScrollWash({ variant = "desktop" }: LandingScrollWashProps) {
  const { fadeStart, fadeEnd, minOpacity, maxOpacity } = CONFIG[variant];
  const [opacity, setOpacity] = useState(minOpacity);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frame = 0;

    const update = () => {
      if (reducedMotion) {
        setOpacity(window.scrollY > fadeStart ? maxOpacity : minOpacity);
        return;
      }

      const t = (window.scrollY - fadeStart) / (fadeEnd - fadeStart);
      const scrolled = Math.min(1, Math.max(0, t));
      setOpacity(minOpacity + (maxOpacity - minOpacity) * scrolled);
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
  }, [fadeEnd, fadeStart, maxOpacity, minOpacity]);

  if (opacity <= 0) return null;

  return (
    <div
      className={cn(
        "landing-scroll-wash pointer-events-none fixed inset-0 z-0",
        variant === "mobile" && "landing-scroll-wash--mobile",
      )}
      aria-hidden
      style={{ opacity }}
    />
  );
}
