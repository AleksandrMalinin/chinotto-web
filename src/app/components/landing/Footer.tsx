import { Link, useLocation } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";
import { cn } from "../ui/utils";

function footerNavClasses(active: boolean) {
  return cn(
    "footer-nav-link",
    active ? "footer-nav-link--active" : "footer-nav-link--inactive",
  );
}

export function Footer() {
  const { pathname } = useLocation();

  const isChangelog =
    pathname === "/changelog" ||
    pathname === "/notes" ||
    pathname === "/updates";
  const isManifesto = pathname === "/manifesto";
  const isPrivacy = pathname === "/privacy";

  return (
    <footer
      className="py-12 px-8 border-t border-landing-border-subtle"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChinottoLogo size={24} className="text-landing-border" />
          <span className="text-sm text-landing-border">
            © 2026 Chinotto{" "}
            <span className="text-xs opacity-60">β</span>
          </span>
        </div>
        <nav className="flex gap-6" aria-label="Footer">
          <Link
            to="/updates"
            className={footerNavClasses(isChangelog)}
            aria-current={isChangelog ? "page" : undefined}
            data-umami-event="footer-updates"
          >
            Updates
          </Link>
          <Link
            to="/manifesto"
            className={footerNavClasses(isManifesto)}
            aria-current={isManifesto ? "page" : undefined}
            data-umami-event="footer-manifesto"
          >
            Manifesto
          </Link>
          <Link
            to="/privacy"
            className={footerNavClasses(isPrivacy)}
            aria-current={isPrivacy ? "page" : undefined}
            data-umami-event="footer-privacy"
          >
            Privacy
          </Link>
          <a
            href="https://github.com/AleksandrMalinin/chinotto"
            target="_blank"
            rel="noreferrer"
            className={footerNavClasses(false)}
            data-umami-event="footer-github"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </footer>
  );
}
