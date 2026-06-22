import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../ui/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms; applied as transition-delay so siblings cascade in. */
  delay?: number;
}

/**
 * Fade + lift a block into view once on scroll. CSS handles the motion and
 * fully no-ops under `prefers-reduced-motion`; this only toggles a data attr.
 * No dependency — IntersectionObserver, disconnect after first reveal.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={visible ? "in" : "out"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}
