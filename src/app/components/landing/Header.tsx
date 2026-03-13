import { Link } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";

interface HeaderProps {
  /** When set, logo and name link to this path (e.g. /showcase). */
  logoHref?: string;
}

export function Header({ logoHref }: HeaderProps) {
  return (
    <header className="py-6 px-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {logoHref ? (
            <Link
              to={logoHref}
              className="flex items-center gap-3 rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
              aria-label="Logo and icon showcase"
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
        <a
          href="#download"
          className="btn-landing-primary px-6 py-2 inline-block"
        >
          Get the app
        </a>
      </nav>
    </header>
  );
}
