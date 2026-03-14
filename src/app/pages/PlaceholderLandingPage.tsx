import { ChinottoLogo } from "../components/ChinottoLogo";

export function PlaceholderLandingPage() {
  return (
    <div className="min-h-screen bg-landing-bg relative overflow-hidden flex flex-col">
      {/* Slow ambient blobs – barely noticeable movement */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="placeholder-blob absolute w-[min(85vw,32rem)] h-[min(85vw,32rem)] rounded-full blur-[120px]"
          style={{
            backgroundColor: "#6b7299",
            top: "12%",
            left: "8%",
            opacity: 0.12,
            animation: "placeholder-blob-float 42s ease-in-out infinite",
          }}
        />
        <div
          className="placeholder-blob absolute w-[min(75vw,28rem)] h-[min(75vw,28rem)] rounded-full blur-[110px]"
          style={{
            backgroundColor: "#4a4e5c",
            top: "48%",
            right: "2%",
            opacity: 0.09,
            animation: "placeholder-blob-float 48s ease-in-out infinite reverse",
            animationDelay: "-12s",
          }}
        />
        <div
          className="placeholder-blob absolute w-[min(70vw,26rem)] h-[min(70vw,26rem)] rounded-full blur-[100px]"
          style={{
            backgroundColor: "#5c6280",
            bottom: "18%",
            left: "25%",
            opacity: 0.1,
            animation: "placeholder-blob-float 45s ease-in-out infinite",
            animationDelay: "-6s",
          }}
        />
      </div>

      {/* Centered content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative z-10">
        <div className="placeholder-logo-wrap mb-14">
          <ChinottoLogo size={96} className="text-landing-accent" />
        </div>
        <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-landing-foreground mb-12 text-center">
          Chinotto
        </h1>
        <p className="text-landing-muted font-light text-base sm:text-[15px] leading-relaxed tracking-wide text-center flex items-baseline justify-center gap-0.5">
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
