import { useEffect, useState } from "react";
import { cn } from "../ui/utils";

export const SCROLL_TOP_AFTER_RATIO = 1.15;

export function useLandingScrollTopVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const threshold = window.innerHeight * SCROLL_TOP_AFTER_RATIO;
        setVisible(window.scrollY > threshold);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return visible;
}

interface LandingScrollTopButtonProps {
  className?: string;
  umamiEvent?: string;
}

export function LandingScrollTopButton({
  className,
  umamiEvent = "scroll-top",
}: LandingScrollTopButtonProps) {
  return (
    <button
      type="button"
      className={cn("landing-scroll-top", className)}
      aria-label="Back to top"
      data-umami-event={umamiEvent}
      onClick={() => {
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        window.scrollTo({
          top: 0,
          behavior: reducedMotion ? "auto" : "smooth",
        });
      }}
    >
      <span className="landing-scroll-top-icon" aria-hidden>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 11V3M7 3L3.5 6.5M7 3l3.5 3.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}

/** Fixed back-to-top — desktop landing. */
export function LandingScrollTopDock() {
  const visible = useLandingScrollTopVisible();

  if (!visible) return null;

  return (
    <LandingScrollTopButton
      className="landing-scroll-top--dock"
      umamiEvent="scroll-top-desktop"
    />
  );
}
