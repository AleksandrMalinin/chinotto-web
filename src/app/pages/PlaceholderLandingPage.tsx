import { useCallback, useEffect, useState } from "react";
import { ChinottoLogo } from "../components/ChinottoLogo";
import { FloatingBlobs } from "../components/landing";
import type { PlaceholderMousePos } from "../components/landing/FloatingBlobs";

export function PlaceholderLandingPage() {
  const [mouse, setMouse] = useState<PlaceholderMousePos | null>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
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

      {/* Centered content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 relative z-10">
        <div className="placeholder-logo-wrap mb-20">
          <ChinottoLogo size={120} className="text-landing-accent" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-landing-foreground mb-16 text-center">
          Chinotto
        </h1>
        <p className="text-[13px] sm:text-sm text-landing-muted font-light leading-relaxed tracking-[0.08em] text-center flex items-baseline justify-center gap-0.5">
          Still thinking.
          <span className="placeholder-cursor ml-0.5" aria-hidden />
        </p>
      </main>

      <div className="app-studio-signature" aria-hidden="true">
        <span>Bogart Labs</span>
      </div>
    </div>
  );
}
