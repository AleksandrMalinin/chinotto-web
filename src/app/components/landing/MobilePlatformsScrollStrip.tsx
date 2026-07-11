import { useCallback, useEffect, useRef, useState } from "react";
import { MobilePhoneMockup } from "./DeviceMockup";
import { productScreenshots } from "../../content/productScreenshots";
import { cn } from "../ui/utils";

const SLIDES = [
  {
    id: "app",
    caption: "In the app",
    src: productScreenshots.platformMobile.src,
    alt: productScreenshots.platformMobile.alt,
  },
  {
    id: "widget",
    caption: "Medium widget",
    src: productScreenshots.widgetMedium.src,
    alt: productScreenshots.widgetMedium.alt,
  },
] as const;

/** One slide per view — horizontal scroll-snap between app and widget. */
export function MobilePlatformsScrollStrip({ className }: { className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const syncActive = useCallback(() => {
    const root = scrollRef.current;
    if (!root) return;

    const center = root.scrollLeft + root.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const slideCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(center - slideCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    syncActive();
    root.addEventListener("scroll", syncActive, { passive: true });
    root.addEventListener("scrollend", syncActive);
    window.addEventListener("resize", syncActive);

    return () => {
      root.removeEventListener("scroll", syncActive);
      root.removeEventListener("scrollend", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, [syncActive]);

  const scrollTo = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div className={cn("platforms-mobile-scroll", className)}>
      <div
        ref={scrollRef}
        className="platforms-mobile-scroll__track"
        role="region"
        aria-roledescription="carousel"
        aria-label="Chinotto on mobile"
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={cn(
              "platforms-mobile-scroll__slide",
              i === activeIndex && "platforms-mobile-scroll__slide--active",
            )}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slide.caption} (${i + 1} of ${SLIDES.length})`}
          >
            <MobilePhoneMockup
              screenshotSrc={slide.src}
              screenshotAlt={slide.alt}
              className="platforms-mobile-scroll__phone"
              hoverable={false}
            />
            <p className="landing-caption mt-3 text-center">{slide.caption}</p>
          </div>
        ))}
      </div>

      <div
        className="platforms-mobile-scroll__dots"
        role="tablist"
        aria-label="Mobile views"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={slide.caption}
            className={cn(
              "platforms-mobile-scroll__dot",
              i === activeIndex && "platforms-mobile-scroll__dot--active",
            )}
            onClick={() => scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
