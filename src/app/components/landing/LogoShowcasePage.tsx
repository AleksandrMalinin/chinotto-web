import { Header } from "./Header";
import { ChinottoLogo } from "../ChinottoLogo";
import { useMinMd } from "../../hooks/useMinMd";

export function LogoShowcasePage() {
  const isDesktop = useMinMd();
  const hideDownload = !isDesktop;

  return (
    <div className="min-h-screen bg-landing-bg flex flex-col">
      <Header logoHref="/" hideDownloadButton={hideDownload} />

      <main className="flex-1 flex flex-col items-center pt-[70px] md:pt-20 pb-20 px-8 min-h-0 overflow-auto">
        <div className="flex flex-col items-center gap-5">
          {/* Logo showcase: 100px on mobile, 120px on desktop */}
          <div className="flex flex-col items-center gap-2">
            <ChinottoLogo size={100} className="text-landing-accent md:hidden" />
            <ChinottoLogo size={120} className="text-landing-accent hidden md:block" />
            <h1 className="text-4xl font-light tracking-tight text-landing-foreground">
              Chinotto
            </h1>
            <span className="text-xs font-light text-landing-muted opacity-70">
              Icon study
            </span>
          </div>

          {/* Size variations */}
          <div className="flex items-center gap-6 pt-5 border-t border-landing-border-subtle w-full justify-center">
            {[56, 44, 36, 28].map((size) => (
              <div key={size} className="flex flex-col items-center gap-1">
                <ChinottoLogo size={size} className="text-landing-accent" />
                <span className="text-xs text-landing-border">{size}px</span>
              </div>
            ))}
          </div>

          {/* Color variations */}
          <div className="flex items-center gap-6 pt-5 border-t border-landing-border-subtle w-full justify-center flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <div className="p-3 rounded-lg bg-landing-border-subtle">
                <ChinottoLogo size={44} className="text-landing-foreground" />
              </div>
              <span className="text-xs text-landing-border">Light</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="p-3 rounded-lg bg-[#7C3AED]">
                <ChinottoLogo size={44} className="text-landing-foreground" />
              </div>
              <span className="text-xs text-landing-border">Violet</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="p-3 rounded-lg bg-[#06B6D4]">
                <ChinottoLogo size={44} className="text-landing-bg" />
              </div>
              <span className="text-xs text-landing-border">Cyan</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="p-3 rounded-lg bg-[#F97316]">
                <ChinottoLogo size={44} className="text-landing-bg" />
              </div>
              <span className="text-xs text-landing-border">Orange</span>
            </div>
          </div>

          {/* Gradient variation */}
          <div className="flex items-center gap-6 pt-5 border-t border-landing-border-subtle w-full justify-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className="p-4 rounded-lg landing-card"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(100,120,180,0.3), rgba(80,100,150,0.3))",
                }}
              >
                <ChinottoLogo size={52} className="text-landing-foreground" />
              </div>
              <span className="text-xs text-landing-border">Gradient</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
