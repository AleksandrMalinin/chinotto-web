import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";
import { CHINOTTO_MAC_DOWNLOAD_URL } from "../../content/links";
import { productUpdates } from "../../content/updates";
import {
  UPDATES_SEEN_EVENT,
  hasUnreadUpdates,
} from "../../content/updatesSeen";
import { cn } from "../ui/utils";

interface HeaderProps {
  /** When set, logo and name link to this path (e.g. /showcase). */
  logoHref?: string;
  /** When true, hide the "Get the app" / download button (e.g. on mobile showcase). */
  hideDownloadButton?: boolean;
}

export function Header({ logoHref, hideDownloadButton }: HeaderProps) {
  const { pathname } = useLocation();
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

  return (
    <header className="py-6 px-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {logoHref ? (
            <Link
              to={logoHref}
              className="flex items-center gap-3 rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
              aria-label="Logo and icon showcase"
              data-umami-event="header-logo"
            >
              <ChinottoLogo size={32} className="text-landing-accent" />
              <span className="text-lg font-light text-landing-foreground">
                Chinotto
              </span>
            </Link>
          ) : (
            <>
              <ChinottoLogo size={32} className="text-landing-accent" />
              <span className="text-lg font-light text-landing-foreground">
                Chinotto
              </span>
            </>
          )}
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/updates"
            className={cn(
              /* Opacity lives on the label span only — dot stays full strength */
              "footer-nav-link group inline-flex items-center gap-2 rounded-md px-0.5 py-0.5",
              isUpdates && "footer-nav-link--active",
            )}
            aria-current={isUpdates ? "page" : undefined}
            aria-label={
              highlightUnreadDot ? "Updates — new release" : "Updates"
            }
            data-umami-event="header-updates"
          >
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
          </Link>
          {!hideDownloadButton && (
            <a
              href={CHINOTTO_MAC_DOWNLOAD_URL}
              className="btn-landing-primary px-6 py-2 inline-block"
              data-umami-event="get-app-header"
            >
              Get the app
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}
