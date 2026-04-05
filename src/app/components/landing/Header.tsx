import { Link } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";
import { CHINOTTO_MAC_DOWNLOAD_URL } from "../../content/links";

interface HeaderProps {
  /** When set, logo and name link to this path (e.g. /showcase). */
  logoHref?: string;
  /** When true, hide the "Get the app" / download button (e.g. on mobile showcase). */
  hideDownloadButton?: boolean;
}

export function Header({ logoHref, hideDownloadButton }: HeaderProps) {
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
                Chinotto{" "}
                <span className="text-sm opacity-60 align-baseline">β</span>
              </span>
            </Link>
          ) : (
            <>
              <ChinottoLogo size={32} className="text-landing-accent" />
              <span className="text-lg font-light text-landing-foreground">
                Chinotto{" "}
                <span className="text-sm opacity-60 align-baseline">β</span>
              </span>
            </>
          )}
        </div>
        {!hideDownloadButton && (
          <a
            href={CHINOTTO_MAC_DOWNLOAD_URL}
            className="btn-landing-primary px-6 py-2 inline-block"
            data-umami-event="get-app-header"
          >
            Get the app
          </a>
        )}
      </nav>
    </header>
  );
}
