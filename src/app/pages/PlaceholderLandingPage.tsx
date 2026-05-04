import { useCallback, useState } from "react";
import { Link } from "react-router";
import { ChinottoLogo } from "../components/ChinottoLogo";
import { Header, MobileMockupFlip } from "../components/landing";
import {
  CHINOTTO_GITHUB_REPO,
  CHINOTTO_IOS_APP_STORE_URL,
} from "../content/links";

export function PlaceholderLandingPage() {
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();
  const [desktopModalOpen, setDesktopModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyPageLink = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-landing-bg">
      <div className="landing-mobile-ambient-bg" aria-hidden />

      <Header logoHref="/" hideDownloadButton />

      {/* Mobile landing: logo 100px, space below header */}
      <main className="flex-1 flex flex-col items-center pt-[70px] px-6 pb-16 relative z-10">
        <Link
          to="/showcase"
          className="placeholder-logo-wrap mb-14 block rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
          aria-label="Logo showcase"
          data-umami-event="logo-showcase-placeholder"
        >
          <ChinottoLogo size={100} className="text-landing-accent" />
        </Link>
        <h1 className="text-4xl font-light tracking-tight text-landing-foreground mb-4 text-center leading-[1.08]">
          Capture first.
          <br />
          <span className="opacity-[0.85]">Revisit later.</span>
        </h1>
        <p className="text-[13px] text-landing-muted font-light leading-relaxed tracking-[0.06em] text-center mb-8 max-w-[340px]">
          Local-first space for your thoughts.
          <br />
          Sync your Mac and iPhone when you want.
          <span className="placeholder-cursor ml-0.5" aria-hidden />
        </p>
        <div className="mb-10 w-full px-1">
          <MobileMockupFlip />
        </div>
        <div className="flex flex-col items-center gap-3 w-full max-w-[280px]">
          {iosStoreUrl ? (
            <a
              href={iosStoreUrl}
              className="btn-landing-primary w-full px-6 py-3 text-base text-center inline-block"
              data-umami-event="app-store-placeholder"
              rel="noreferrer"
              target="_blank"
            >
              Get on iPhone
            </a>
          ) : null}
          <button
            type="button"
            onClick={() => setDesktopModalOpen(true)}
            className={
              iosStoreUrl
                ? "btn-landing-secondary w-full px-6 py-3 text-base text-center"
                : "btn-landing-primary w-full px-6 py-3 text-base text-center"
            }
            data-umami-event="download-placeholder"
          >
            Download for Mac
          </button>
        </div>
        <Link
          to="/manifesto"
          className="mt-6 text-[13px] font-light text-landing-muted/70 underline-offset-[6px] transition-colors hover:text-landing-muted hover:underline"
          data-umami-event="learn-more-placeholder"
        >
          Learn more
        </Link>
      </main>

      <div className="app-studio-signature" aria-hidden="true">
        <span>Bogart Labs</span>
      </div>

      {/* Mobile: modal when tapping Mac download (installer not available from phone browser) */}
      {desktopModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="desktop-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setDesktopModalOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-sm rounded-2xl border border-landing-card-border bg-[#0e0e12] p-5 shadow-xl">
            <h2
              id="desktop-modal-title"
              className="text-lg font-light text-landing-foreground mb-3"
            >
              Install on Mac
            </h2>
            <p className="mb-5 text-sm font-light leading-relaxed text-landing-muted">
              Copy the link and open this page on your Mac to download.
            </p>
            <button
              type="button"
              onClick={copyPageLink}
              className="btn-landing-primary w-full px-4 py-2.5 text-sm text-center"
              data-umami-event="modal-copy-link"
            >
              {copied ? "Copied" : "Copy page link"}
            </button>
            <button
              type="button"
              onClick={() => setDesktopModalOpen(false)}
              className="mt-3 w-full px-4 py-2.5 text-sm text-landing-muted transition-colors hover:text-landing-foreground"
            >
              Close
            </button>
            <a
              href={CHINOTTO_GITHUB_REPO}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-center text-xs font-light text-landing-muted/50 transition-colors hover:text-landing-muted/75"
              data-umami-event="mobile-github"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
