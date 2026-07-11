import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../ui/utils";

interface StoryThreadListProps {
  children: ReactNode;
  className?: string;
  onActiveChange?: (index: number) => void;
  /** Earlier beat index for linked river pan — fires before story highlight. */
  onRiverBeatChange?: (index: number) => void;
}

/**
 * Scroll-linked pulse on story-thread markers.
 * Story highlight follows reading position; river beat can lead via onRiverBeatChange.
 */
export function StoryThreadList({
  children,
  className,
  onActiveChange,
  onRiverBeatChange,
}: StoryThreadListProps) {
  const listRef = useRef<HTMLOListElement | null>(null);
  const activeRef = useRef(0);
  const riverBeatRef = useRef(0);
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
        const vh = window.innerHeight;
        const storyProbe = vh * 0.4;
        const riverProbe = vh * 0.86;

        let storyBeat = 0;
        let storyDist = Number.POSITIVE_INFINITY;
        let riverBeat = 0;

        for (let i = 0; i < beats.length; i++) {
          const rect = beats[i]!.getBoundingClientRect();
          const center = rect.top + rect.height * 0.35;
          const dist = Math.abs(center - storyProbe);
          if (dist < storyDist) {
            storyDist = dist;
            storyBeat = i;
          }
          if (rect.top <= riverProbe) {
            riverBeat = i;
          }
        }

        if (riverBeatRef.current !== riverBeat) {
          riverBeatRef.current = riverBeat;
          onRiverBeatChange?.(riverBeat);
        }

        if (activeRef.current === storyBeat) return;

        activeRef.current = storyBeat;
        setActiveIndex(storyBeat);
        onActiveChange?.(storyBeat);
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
  }, [onActiveChange, onRiverBeatChange]);

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
