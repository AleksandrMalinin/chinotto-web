import { useCallback, useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { ChinottoLogo } from "../components/ChinottoLogo";
import { FloatingBlobs, Header } from "../components/landing";
import type { PlaceholderMousePos } from "../components/landing/FloatingBlobs";

export function PlaceholderLandingPage() {
  const [mouse, setMouse] = useState<PlaceholderMousePos | null>(null);
  const [desktopModalOpen, setDesktopModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyPageLink = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const onMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setMouse({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setMouse(null);
  }, []);

  useEffect(() => {
    window.addEventListener("mouseleave", onMouseLeave);
    return () => window.removeEventListener("mouseleave", onMouseLeave);
  }, [onMouseLeave]);

  return (
    <div
      className="min-h-screen bg-landing-bg relative overflow-hidden flex flex-col"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <FloatingBlobs variant="background" mouse={mouse} />

      <Header logoHref="/" hideDownloadButton />

      {/* Mobile landing: logo 100px, space below header */}
      <main className="flex-1 flex flex-col items-center pt-20 px-6 pb-16 relative z-10">
        <a
          href="/showcase"
          className="placeholder-logo-wrap mb-14 block rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
          aria-label="Logo showcase"
        >
          <ChinottoLogo size={100} className="text-landing-accent" />
        </a>
        <h1 className="text-4xl font-light tracking-tight text-landing-foreground mb-4 text-center leading-[1.08]">
          Capture first.
          <br />
          <span className="opacity-[0.85]">Revisit later.</span>
        </h1>
        <p className="text-[13px] text-landing-muted font-light leading-relaxed tracking-[0.08em] text-center mb-10">
          A minimal desktop thinking tool.
          <span className="placeholder-cursor ml-0.5" aria-hidden />
        </p>
        <div className="flex flex-col items-center gap-3 w-full max-w-[280px]">
          <button
            type="button"
            onClick={() => setDesktopModalOpen(true)}
            className="btn-landing-primary w-full px-6 py-3 text-base text-center"
          >
            Download Chinotto <span className="opacity-80">β</span>
          </button>
          <a
            href="/manifesto"
            className="btn-landing-secondary w-full px-6 py-3 text-base text-center inline-block"
          >
            Learn More
          </a>
        </div>
        <p className="mt-10 text-xs text-landing-muted opacity-70">
          Desktop only
        </p>
      </main>

      <div className="app-studio-signature" aria-hidden="true">
        <span>Bogart Labs</span>
      </div>

      {/* Mobile: modal when tapping Download (desktop app not installable on phone) */}
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
          <div className="relative z-10 w-full max-w-sm rounded-2xl border border-landing-card-border bg-[#0e0e12] p-6 shadow-xl">
            <h2
              id="desktop-modal-title"
              className="text-lg font-light text-landing-foreground mb-2"
            >
              Desktop app
            </h2>
            <p className="text-sm text-landing-muted font-light leading-relaxed mb-6">
              Chinotto is currently available for macOS.
              <br />
              Open this page on your Mac to download it.
            </p>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={copyPageLink}
                className="btn-landing-secondary w-full px-4 py-2.5 text-sm text-center"
              >
                {copied ? "Copied" : "Copy page link"}
              </button>
              <span
                className="btn-landing-secondary w-full px-4 py-2.5 text-sm text-center inline-flex items-center justify-center gap-1.5 opacity-60 cursor-not-allowed pointer-events-none"
                aria-disabled="true"
              >
                View on GitHub
                <span className="text-[10px] opacity-80">soon</span>
              </span>
              <button
                type="button"
                onClick={() => setDesktopModalOpen(false)}
                className="mt-2 w-full px-4 py-2.5 text-sm text-landing-muted hover:text-landing-foreground transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
