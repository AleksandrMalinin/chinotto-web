import { Link, useLocation } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";
import { BogartLabsSignature } from "./BogartLabsSignature";
import { cn } from "../ui/utils";
import {
  CHINOTTO_GITHUB_REPO,
  CHINOTTO_IOS_APP_STORE_URL,
  CHINOTTO_MOBILE_GITHUB_REPO,
} from "../../content/links";

function footerNavClasses(active: boolean) {
  return cn(
    "footer-nav-link",
    active ? "footer-nav-link--active" : "footer-nav-link--inactive",
  );
}

export function Footer() {
  const appStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();
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
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-x-8 sm:gap-y-4">
        <div className="flex items-center gap-3">
          <ChinottoLogo size={24} className="text-landing-border" />
          <span className="text-sm text-landing-border">© 2026 Chinotto</span>
        </div>
        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:justify-end"
          aria-label="Footer"
        >
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
          {appStoreUrl ? (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className={footerNavClasses(false)}
              data-umami-event="footer-app-store"
            >
              App Store ↗
            </a>
          ) : null}
          <span
            className="inline-flex flex-wrap items-center gap-x-1.5 text-sm leading-normal"
            aria-label="Chinotto on GitHub"
          >
            <span className="font-normal text-landing-muted opacity-[0.55]">
              GitHub
            </span>
            <a
              href={CHINOTTO_GITHUB_REPO}
              target="_blank"
              rel="noreferrer"
              className={footerNavClasses(false)}
              data-umami-event="footer-github-mac"
            >
              Mac ↗
            </a>
            <span
              className="select-none text-landing-muted/40"
              aria-hidden
            >
              ·
            </span>
            <a
              href={CHINOTTO_MOBILE_GITHUB_REPO}
              target="_blank"
              rel="noreferrer"
              className={footerNavClasses(false)}
              data-umami-event="footer-github-ios"
            >
              iOS ↗
            </a>
          </span>
        </nav>
        <BogartLabsSignature className="sm:col-span-2 sm:justify-self-center sm:pt-1" />
      </div>
    </footer>
  );
}
