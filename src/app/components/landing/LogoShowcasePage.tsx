import { Link } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";

export function LogoShowcasePage() {
  return (
    <div className="min-h-screen bg-landing-bg">
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

      <main className="size-full flex items-center justify-center py-16 px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo showcase */}
          <div className="flex flex-col items-center gap-6">
            <ChinottoLogo size={120} className="text-landing-accent" />
            <h1 className="text-4xl font-light tracking-tight text-landing-foreground">
              Chinotto
            </h1>
            <p className="text-center max-w-md text-landing-muted">
              A minimal desktop thinking tool for instantly capturing thoughts
              and recovering context later
            </p>
          </div>

          {/* Size variations */}
          <div className="flex items-center gap-8 pt-8 border-t border-landing-border-subtle w-full justify-center">
            {[80, 64, 48, 32].map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <ChinottoLogo size={size} className="text-landing-accent" />
                <span className="text-xs text-landing-border">{size}px</span>
              </div>
            ))}
          </div>

          {/* Color variations */}
          <div className="flex items-center gap-8 pt-8 border-t border-landing-border-subtle w-full justify-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 rounded-xl bg-landing-border-subtle">
                <ChinottoLogo size={64} className="text-landing-foreground" />
              </div>
              <span className="text-xs text-landing-border">Light</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 rounded-xl bg-[#7C3AED]">
                <ChinottoLogo size={64} className="text-landing-foreground" />
              </div>
              <span className="text-xs text-landing-border">Violet</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 rounded-xl bg-[#06B6D4]">
                <ChinottoLogo size={64} className="text-landing-bg" />
              </div>
              <span className="text-xs text-landing-border">Cyan</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-4 rounded-xl bg-[#F97316]">
                <ChinottoLogo size={64} className="text-landing-bg" />
              </div>
              <span className="text-xs text-landing-border">Orange</span>
            </div>
          </div>

          {/* Gradient variation */}
          <div className="flex items-center gap-8 pt-8 border-t border-landing-border-subtle w-full justify-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className="p-6 rounded-xl landing-card"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(100,120,180,0.3), rgba(80,100,150,0.3))",
                }}
              >
                <ChinottoLogo size={80} className="text-landing-foreground" />
              </div>
              <span className="text-xs text-landing-border">Gradient</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
