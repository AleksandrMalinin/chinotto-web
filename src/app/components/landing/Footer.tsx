import { ChinottoLogo } from "../ChinottoLogo";

export function Footer() {
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
        <div className="flex gap-6 text-sm">
          <a href="/manifesto" className="text-landing-muted hover:underline" data-umami-event="footer-manifesto">
            Manifesto
          </a>
          <a href="/privacy" className="text-landing-muted hover:underline" data-umami-event="footer-privacy">
            Privacy
          </a>
          <a
            href="https://github.com/AleksandrMalinin/chinotto"
            target="_blank"
            rel="noreferrer"
            className="text-landing-muted hover:underline"
            data-umami-event="footer-github"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
