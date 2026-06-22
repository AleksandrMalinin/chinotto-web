import { useCallback, useState } from "react";
import { CHINOTTO_GITHUB_REPO } from "../../content/links";

interface MacDownloadMobileDialogProps {
  open: boolean;
  onClose: () => void;
}

/** On iPhone/iPad — Mac DMG is not installable; copy link to open on Mac. */
export function MacDownloadMobileDialog({
  open,
  onClose,
}: MacDownloadMobileDialogProps) {
  const [copied, setCopied] = useState(false);

  const copyPageLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="desktop-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-landing-card-border bg-[#0e0e12] p-5 shadow-xl">
        <h2
          id="desktop-modal-title"
          className="mb-3 text-lg font-light text-landing-foreground"
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
          onClick={onClose}
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
  );
}
