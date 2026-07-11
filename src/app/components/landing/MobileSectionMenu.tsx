import { useEffect, useId, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";
import { cn } from "../ui/utils";

export const MOBILE_LANDING_SECTION_LINKS = [
  { label: "Why", hash: "#problem" },
  { label: "Pocket", hash: "#pocket" },
  { label: "Resurfacing", hash: "#resurfacing" },
  { label: "Platforms", hash: "#two-experiences" },
  { label: "Share", hash: "#sharing" },
  { label: "Trust", hash: "#local-first" },
  { label: "Download", hash: "#download" },
] as const;

interface MobileSectionMenuProps {
  className?: string;
}

function useActiveSectionIndex() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const probe = window.innerHeight * 0.38;
        let best = 0;
        let bestDist = Number.POSITIVE_INFINITY;

        MOBILE_LANDING_SECTION_LINKS.forEach((link, index) => {
          const node = document.getElementById(link.hash.slice(1));
          if (!node) return;
          const rect = node.getBoundingClientRect();
          const center = rect.top + rect.height * 0.2;
          const dist = Math.abs(center - probe);
          if (dist < bestDist) {
            bestDist = dist;
            best = index;
          }
        });

        setActiveIndex((prev) => (prev === best ? prev : best));
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

  return activeIndex;
}

/** Mobile landing — brand mark opens section sheet. */
export function MobileSectionMenu({ className }: MobileSectionMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const activeIndex = useActiveSectionIndex();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  const overlay =
    open && typeof document !== "undefined"
      ? createPortal(
          <div className="thread-nav-overlay" data-open>
            <div
              className="thread-nav-backdrop"
              aria-hidden
              onClick={close}
            />
            <nav
              id={panelId}
              className="thread-nav-sheet"
              aria-label="Page sections"
            >
              <p className="thread-nav-eyebrow">On this page</p>

              <div className="thread-nav-body">
                <div className="thread-nav-rail" aria-hidden>
                  <div className="thread-nav-line" />
                  <div className="thread-nav-pulse" />
                  {MOBILE_LANDING_SECTION_LINKS.map((_, index) => (
                    <span
                      key={index}
                      className="thread-nav-node"
                      style={
                        {
                          "--thread-node": index,
                          "--thread-count":
                            MOBILE_LANDING_SECTION_LINKS.length - 1,
                        } as CSSProperties
                      }
                    />
                  ))}
                </div>

                <ul className="thread-nav-beats">
                  {MOBILE_LANDING_SECTION_LINKS.map((link, index) => (
                    <li
                      key={link.hash}
                      style={{ "--beat-index": index } as CSSProperties}
                    >
                      <Link
                        to={{ hash: link.hash.slice(1) }}
                        className={cn(
                          "thread-nav-beat",
                          index === activeIndex && "thread-nav-beat--active",
                        )}
                        data-umami-event={`mobile-section-${link.hash.slice(1)}`}
                        onClick={close}
                      >
                        <span className="thread-nav-beat-label">{link.label}</span>
                        <span className="thread-nav-beat-hint" aria-hidden>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className={cn("thread-nav", open && "thread-nav--open", className)}>
      <button
        type="button"
        className="thread-nav-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close page sections" : "Browse page sections"}
        data-umami-event="mobile-section-menu-toggle"
        onClick={() => setOpen((value) => !value)}
      >
        <ChinottoLogo size={32} className="thread-nav-trigger-logo" />
        <span className="thread-nav-trigger-chevron" aria-hidden>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path
              d="M2.25 4.25 5.5 7.5 8.75 4.25"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      {overlay}
    </div>
  );
}
