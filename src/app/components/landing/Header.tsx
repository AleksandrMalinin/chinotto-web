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
  { label: "Why", hash: "#problem" },
  { label: "Resurfacing", hash: "#resurfacing" },
  { label: "Capture", hash: "#capture" },
  { label: "Trust", hash: "#local-first" },
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
      <ChinottoLogo
        size={isDesktop ? 32 : 28}
        className="shrink-0 text-landing-accent"
      />
      <span
        className={cn(
          "font-light text-landing-foreground",
          isDesktop ? "text-lg" : "hidden text-lg sm:inline",
        )}
      >
        Chinotto
      </span>
    </>
  );

  const logoClassName = cn(
    "box-border flex items-center rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg",
    isDesktop ? "gap-3" : "gap-2 h-11",
  );

  /** Hero + sticky bar cover install on mobile landing — header CTA only crowds the row. */
  const showHeaderDownload =
    !hideDownloadButton && (isDesktop || !(isLanding && iosStoreUrl));

  /** Same-route logo tap must not run a real navigation — on mobile Safari it can full-reload the document until JS boots again. */
  const logoLinkIsCurrent = Boolean(logoHref && pathname === logoHref);

  const updatesMark = (
    <>
      <span
        className={cn(
          "transition-[opacity,color] duration-[180ms] ease-out",
          !isUpdates &&
            "font-normal text-landing-muted opacity-[0.55] group-hover:opacity-[0.92] group-hover:text-[color-mix(in_srgb,var(--landing-foreground)_42%,var(--landing-muted))]",
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
            "bg-landing-accent",
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

  const showMobileSectionMenu = isLanding && !isDesktop;

  const logoSlot = showMobileSectionMenu ? (
    <span className="thread-nav-header-spacer" aria-hidden />
  ) : logoHref ? (
    logoLinkIsCurrent ? (
      <button
        type="button"
        className={logoClassName}
        aria-label="Top of page"
        aria-current="page"
        data-umami-event="header-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
  );

  return (
    <header className="landing-header relative z-20 px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
      <nav className="relative mx-auto max-w-7xl">
        <div className="landing-header-row flex items-center justify-between gap-4 sm:gap-6">
          <div className="flex min-w-0 items-center">{logoSlot}</div>

          {isLanding ? (
            <ul
              className="header-section-nav hidden lg:flex"
              aria-label="Page sections"
            >
              {LANDING_SECTION_LINKS.map((link, index) => (
                <li key={link.hash} className="flex items-center">
                  {index > 0 ? (
                    <span className="header-section-sep" aria-hidden />
                  ) : null}
                  <Link
                    to={{ hash: link.hash.slice(1) }}
                    className="header-section-link"
                    data-umami-event={`header-section-${link.hash.slice(1)}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="ml-auto flex shrink-0 items-center">
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
            {!showHeaderDownload ? null : isDesktop || !iosStoreUrl ? (
              <Link
                to="/#download"
                className="btn-landing-primary ml-4 inline-block px-6 py-2 sm:ml-6"
                data-umami-event="get-app-header"
              >
                Get the app
              </Link>
            ) : (
              <a
                href={iosStoreUrl}
                className="btn-landing-primary ml-4 inline-block px-5 py-2 text-sm sm:ml-6 sm:px-6 sm:text-base"
                data-umami-event="get-app-header-ios"
                rel="noreferrer"
                target="_blank"
              >
                Get on iPhone
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
