import { Link, useNavigate } from "react-router";
import { ChinottoLogo } from "../components/ChinottoLogo";

const SHORTCUTS = [
  { keys: "Enter", action: "Save thought" },
  { keys: "⌘ K", action: "Search" },
  { keys: "⌘ P", action: "Pin thought" },
  { keys: "⌘ N", action: "Focus input" },
  { keys: "Esc", action: "Close overlays" },
] as const;

export function PreviewPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-landing-bg cursor-pointer"
      onClick={() => navigate("/")}
      onKeyDown={(e) => e.key === "Escape" && navigate("/")}
      role="button"
      tabIndex={0}
      aria-label="Click anywhere to close"
    >
      <header className="py-6 px-8 border-b border-landing-border-subtle">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
            aria-label="Back to home"
          >
            <ChinottoLogo size={32} className="text-landing-accent" />
            <span className="text-lg font-light text-landing-foreground">
              Chinotto
            </span>
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center py-16 px-8 min-h-[calc(100vh-5rem)]">
        <article
          className="w-full max-w-md rounded-2xl p-10 text-center neon-glow border border-landing-card-border"
          style={{ backgroundColor: "var(--landing-border-subtle)" }}
        >
          <div className="flex flex-col items-center gap-6">
            <ChinottoLogo size={64} className="text-landing-foreground" />
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-landing-foreground">
                Chinotto
              </h1>
              <p className="mt-2 text-base font-normal text-landing-muted neon-text">
                Capture first. Understand later.
              </p>
            </div>
          </div>

          <div className="mt-10 text-left">
            <h2 className="text-xs font-medium uppercase tracking-wider text-landing-border mb-4">
              Shortcuts
            </h2>
            <ul className="space-y-3">
              {SHORTCUTS.map(({ keys, action }) => (
                <li
                  key={keys}
                  className="flex items-center gap-3 text-sm text-landing-muted"
                >
                  <kbd className="inline-flex items-center justify-center min-w-[4.5rem] px-2.5 py-1 rounded-md border border-landing-border/60 bg-landing-bg/80 text-landing-foreground font-mono text-xs">
                    {keys}
                  </kbd>
                  <span className="text-landing-muted">—</span>
                  <span className="text-landing-foreground-strong">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 text-xs text-landing-border">Version 0.1</p>
        </article>
      </main>
    </div>
  );
}
