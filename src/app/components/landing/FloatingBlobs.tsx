export interface PlaceholderMousePos {
  x: number;
  y: number;
}

interface FloatingBlobsProps {
  /** Full-bleed background variant: ambient light blobs, optional mouse reaction */
  variant?: "default" | "background";
  /** Normalized 0–1; one blob follows slightly for ambient lighting effect */
  mouse?: PlaceholderMousePos | null;
}

const MOUSE_INFLUENCE = 24;

export function FloatingBlobs({ variant = "default", mouse = null }: FloatingBlobsProps) {
  if (variant === "background") {
    const dx = mouse ? (mouse.x - 0.5) * MOUSE_INFLUENCE : 0;
    const dy = mouse ? (mouse.y - 0.5) * MOUSE_INFLUENCE : 0;

    return (
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[10%] left-[5%] placeholder-blob--mouse"
          style={{ transform: `translate(${dx}px, ${dy}px)` }}
        >
          <div
            className="placeholder-blob h-[min(70vw,18rem)] w-[min(70vw,18rem)] rounded-full opacity-[0.09] max-md:blur-3xl md:h-[min(90vw,36rem)] md:w-[min(90vw,36rem)] md:blur-[140px]"
            style={{
              backgroundColor: "#3b0764",
              animation: "placeholder-blob-float 60s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          />
        </div>
        {/* Extra blobs are desktop-only: three stacked blurs + motion tank mobile GPUs */}
        <div
          className="placeholder-blob absolute hidden w-[min(85vw,34rem)] h-[min(85vw,34rem)] rounded-full blur-[130px] opacity-[0.08] md:block"
          style={{
            backgroundColor: "#0f172a",
            top: "45%",
            right: "0%",
            animation: "placeholder-blob-float 72s cubic-bezier(0.4, 0, 0.6, 1) infinite reverse",
            animationDelay: "-18s",
          }}
        />
        <div
          className="placeholder-blob absolute hidden w-[min(80vw,30rem)] h-[min(80vw,30rem)] rounded-full blur-[120px] opacity-[0.07] md:block"
          style={{
            backgroundColor: "#431407",
            bottom: "15%",
            left: "20%",
            animation: "placeholder-blob-float 66s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            animationDelay: "-8s",
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative max-w-6xl mx-auto h-64 mb-20">
      <div
        className="absolute top-0 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "#7C3AED" }}
      />
      <div
        className="absolute top-20 right-1/4 w-40 h-40 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "#06B6D4" }}
      />
      <div
        className="absolute top-10 left-1/2 w-36 h-36 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "#F97316" }}
      />
    </div>
  );
}
