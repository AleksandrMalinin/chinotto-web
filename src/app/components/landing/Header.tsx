import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";
import { productUpdates } from "../../content/updates";
import {
  UPDATES_SEEN_EVENT,
  hasUnreadUpdates,
} from "../../content/updatesSeen";
import { CHINOTTO_IOS_APP_STORE_URL } from "../../content/links";
import { useMinMd } from "../../hooks/useMinMd";
import { cn } from "../ui/utils";

const LANDING_SECTION_LINKS = [
  { label: "Desktop & mobile", hash: "#platforms" },
  { label: "Trails & Spaces", hash: "#connected" },
  { label: "How it works", hash: "#how-it-works" },
] as const;

interface HeaderProps {
  /** When set, logo and name link to this path (e.g. /showcase). */
  logoHref?: string;
  /** When true, hide the "Get the app" / download button (e.g. on mobile showcase). */
  hideDownloadButton?: boolean;
}

export function Header({ logoHref, hideDownloadButton }: HeaderProps) {
  const { pathname } = useLocation();
  const isDesktop = useMinMd();
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();
  const isLanding = pathname === "/" || pathname === "/sync";
  const isUpdates =
    pathname === "/changelog" ||
    pathname === "/notes" ||
    pathname === "/updates";

  const latestUpdatesVersion = productUpdates[0]?.version ?? "";

  const [updatesUnread, setUpdatesUnread] = useState(() =>
    latestUpdatesVersion.length > 0 && typeof window !== "undefined"
      ? hasUnreadUpdates(latestUpdatesVersion)
      : false,
  );

  const [showSectionNav, setShowSectionNav] = useState(false);

  useEffect(() => {
    if (!isLanding) {
      setShowSectionNav(false);
      return;
    }

    const hero = document.getElementById("hero");
    if (!hero || typeof IntersectionObserver === "undefined") {
      setShowSectionNav(false);
      return;
    }

    let show = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const ratio = entry.intersectionRatio;
        if (ratio > 0.35) {
          show = false;
        } else if (ratio < 0.12) {
          show = true;
        }
        setShowSectionNav((prev) => (prev === show ? prev : show));
      },
      { threshold: [0, 0.12, 0.35, 0.5, 0.75, 1] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isLanding]);

  useEffect(() => {
    if (!latestUpdatesVersion) return;

    const sync = () =>
      setUpdatesUnread(hasUnreadUpdates(latestUpdatesVersion));

    sync();
    window.addEventListener(UPDATES_SEEN_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(UPDATES_SEEN_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [latestUpdatesVersion]);

  const highlightUnreadDot = updatesUnread && !isUpdates;

  const logoMark = (
    <>
      <ChinottoLogo size={32} className="text-landing-accent" />
      <span className="text-lg font-light text-landing-foreground">
        Chinotto
      </span>
    </>
  );

  const logoClassName =
    "flex items-center gap-3 rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg";

  /** Same-route logo tap must not run a real navigation — on mobile Safari it can full-reload the document until JS boots again. */
  const logoLinkIsCurrent = Boolean(logoHref && pathname === logoHref);

  const updatesMark = (
    <>
      <span
        className={cn(
          "transition-[opacity,color,text-shadow] duration-[180ms] ease-out",
          !isUpdates &&
            "font-normal text-landing-muted opacity-[0.55] group-hover:opacity-[0.92] group-hover:text-[color-mix(in_srgb,var(--landing-foreground)_42%,var(--landing-muted))] group-hover:[text-shadow:0_0_16px_rgba(139,148,200,0.045),0_0_32px_rgba(139,148,200,0.022)]",
        )}
      >
        Updates
      </span>
      <span
        aria-hidden
        className={cn(
          "size-[5px] shrink-0 rounded-full transition-[color,box-shadow] duration-[180ms] ease-out",
          isUpdates && "bg-landing-accent",
          !isUpdates &&
            highlightUnreadDot &&
            "bg-[#cab4ff] shadow-[inset_0_0_2px_rgba(248,244,255,1),0_0_5px_rgba(210,195,255,1),0_0_11px_rgba(175,155,245,1),0_0_22px_rgba(139,148,200,0.95),0_0_34px_rgba(110,98,185,0.65)]",
          !isUpdates &&
            !highlightUnreadDot &&
            "bg-landing-accent/45 group-hover:bg-landing-accent/80",
        )}
      />
    </>
  );

  const updatesNavClassName = cn(
    "header-nav-link footer-nav-link group inline-flex items-center gap-2 rounded-md",
    isUpdates && "footer-nav-link--active",
  );

  const sectionNavClassName =
    "header-nav-link footer-nav-link footer-nav-link--inactive text-[13px] tracking-[0.02em]";

  return (
    <header className="relative z-20 py-6 px-8">
      <nav className="relative mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
          {logoHref ? (
            logoLinkIsCurrent ? (
              <button
                type="button"
                className={logoClassName}
                aria-label="Top of page"
                aria-current="page"
                data-umami-event="header-logo"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                {logoMark}
              </button>
            ) : (
              <Link
                to={logoHref}
                className={logoClassName}
                aria-label="Logo and icon showcase"
                data-umami-event="header-logo"
              >
                {logoMark}
              </Link>
            )
          ) : (
            <span className="flex items-center gap-3">{logoMark}</span>
          )}
          </div>

          <div className="flex items-center gap-6">
          {isUpdates ? (
            <button
              type="button"
              className={updatesNavClassName}
              aria-label="Top of page"
              aria-current="page"
              data-umami-event="header-updates"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            >
              {updatesMark}
            </button>
          ) : (
            <Link
              to="/updates"
              className={updatesNavClassName}
              aria-label={
                highlightUnreadDot ? "Updates — new release" : "Updates"
              }
              data-umami-event="header-updates"
            >
              {updatesMark}
            </Link>
          )}
          {!hideDownloadButton &&
            (isDesktop || !iosStoreUrl ? (
              <Link
                to="/#download"
                className="btn-landing-primary px-6 py-2 inline-block"
                data-umami-event="get-app-header"
              >
                Get the app
              </Link>
            ) : (
              <a
                href={iosStoreUrl}
                className="btn-landing-primary px-6 py-2 inline-block"
                data-umami-event="get-app-header-ios"
                rel="noreferrer"
                target="_blank"
              >
                Get on iPhone
              </a>
            ))}
          </div>
        </div>

        {isLanding ? (
          <ul
            className={cn(
              "pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex",
              showSectionNav && "pointer-events-auto visible",
              !showSectionNav && "invisible",
            )}
            aria-label="Page sections"
            aria-hidden={!showSectionNav}
          >
            {LANDING_SECTION_LINKS.map((link) => (
              <li key={link.hash}>
                <Link
                  to={{ hash: link.hash.slice(1) }}
                  className={sectionNavClassName}
                  data-umami-event={`header-section-${link.hash.slice(1)}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
