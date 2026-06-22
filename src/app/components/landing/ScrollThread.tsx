import { useEffect, useState } from "react";
import { cn } from "../ui/utils";

const THREAD_SECTIONS = ["platforms", "connected", "how-it-works"] as const;
const LG_MEDIA = "(min-width: 1024px)";

type ThreadLayout = {
  left: number;
  top: number;
  height: number;
  fill: number;
  markers: number[];
  visible: boolean;
};

const HIDDEN: ThreadLayout = {
  left: 0,
  top: 0,
  height: 0,
  fill: 0,
  markers: [],
  visible: false,
};

function measureThread(): ThreadLayout {
  if (!window.matchMedia(LG_MEDIA).matches) return HIDDEN;

  const nodes = THREAD_SECTIONS.map((id) => document.getElementById(id));
  if (nodes.some((node) => !node)) return HIDDEN;

  const first = nodes[0]!.getBoundingClientRect();
  const last = nodes[nodes.length - 1]!.getBoundingClientRect();

  const top = first.top + first.height * 0.12;
  const bottom = last.bottom - last.height * 0.08;
  const height = bottom - top;

  if (height < 120) return HIDDEN;

  const contentWidth = Math.min(window.innerWidth, 1100);
  const left = Math.max(20, (window.innerWidth - contentWidth) / 2 - 28);

  const docStart = top + window.scrollY;
  const docEnd = bottom + window.scrollY;
  const probe = window.scrollY + window.innerHeight * 0.38;
  const fill = Math.min(1, Math.max(0, (probe - docStart) / (docEnd - docStart)));

  const markers = nodes.map((node) => {
    const rect = node!.getBoundingClientRect();
    const y = rect.top + rect.height * 0.14 - top;
    return Math.min(1, Math.max(0, y / height));
  });

  const visible =
    bottom > 0 && top < window.innerHeight && fill >= 0 && fill <= 1;

  return { left, top, height, fill, markers, visible };
}

/** Desktop scroll thread linking Platforms → Trails → How it works. */
export function ScrollThread() {
  const [layout, setLayout] = useState<ThreadLayout>(HIDDEN);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setLayout(measureThread()));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const lg = window.matchMedia(LG_MEDIA);
    lg.addEventListener("change", update);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      lg.removeEventListener("change", update);
    };
  }, []);

  if (!layout.visible) return null;

  const fillPx = layout.height * layout.fill;

  return (
    <div
      className="scroll-thread pointer-events-none fixed z-[6] hidden lg:block"
      style={{ left: layout.left, top: layout.top, height: layout.height }}
      aria-hidden
    >
      <div className="scroll-thread-track absolute inset-x-0 top-0 bottom-0 w-px bg-[rgba(139,148,200,0.14)]" />
      <div
        className="scroll-thread-fill absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-[rgba(139,148,200,0.55)] to-[rgba(139,148,200,0.28)] motion-safe:transition-[height] motion-safe:duration-150 motion-reduce:transition-none"
        style={{ height: fillPx }}
      />
      {layout.markers.map((ratio, i) => {
        const lit = layout.fill >= ratio - 0.02;
        return (
          <span
            key={THREAD_SECTIONS[i]}
            className={cn(
              "absolute left-1/2 size-[5px] -translate-x-1/2 rounded-full border motion-safe:transition-[background-color,border-color,box-shadow] motion-safe:duration-200",
              lit
                ? "border-[rgba(175,155,245,0.55)] bg-[rgba(139,148,200,0.85)] shadow-[0_0_10px_rgba(139,148,200,0.35)]"
                : "border-[rgba(139,148,200,0.22)] bg-landing-bg",
            )}
            style={{ top: `${ratio * 100}%` }}
          />
        );
      })}
    </div>
  );
}
