import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../ui/utils";

interface StoryThreadListProps {
  children: ReactNode;
  className?: string;
  onActiveChange?: (index: number) => void;
}

/**
 * Scroll-linked pulse on story-thread markers — marks the beat nearest viewport center.
 */
export function StoryThreadList({
  children,
  className,
  onActiveChange,
}: StoryThreadListProps) {
  const listRef = useRef<HTMLOListElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof IntersectionObserver === "undefined") return;

    const beats = Array.from(
      list.querySelectorAll<HTMLLIElement>("[data-story-beat]"),
    );
    if (beats.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) return;

    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const probe = window.innerHeight * 0.42;
        let best = 0;
        let bestDist = Number.POSITIVE_INFINITY;

        for (let i = 0; i < beats.length; i++) {
          const rect = beats[i]!.getBoundingClientRect();
          const center = rect.top + rect.height * 0.35;
          const dist = Math.abs(center - probe);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        }

        setActiveIndex((prev) => {
          if (prev === best) return prev;
          onActiveChange?.(best);
          return best;
        });
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
  }, [onActiveChange]);

  return (
    <ol
      ref={listRef}
      className={className}
      data-story-active={activeIndex}
    >
      {children}
    </ol>
  );
}

interface StoryThreadBeatProps {
  index: number;
  className?: string;
  /** Hash anchor on chapter beats — #problem, #resurfacing, etc. */
  anchorId?: string;
  children: ReactNode;
}

export function StoryThreadBeat({
  index,
  className,
  anchorId,
  children,
}: StoryThreadBeatProps) {
  return (
    <li
      id={anchorId}
      data-story-beat={index}
      className={cn(
        "story-thread-beat",
        `story-thread-beat--${index}`,
        className,
      )}
    >
      {children}
    </li>
  );
}
