interface FloatingBlobsProps {
  /** Full-bleed ambient wash — mobile/content routes; CPU-only (no blur filters). */
  variant?: "default" | "background";
}

export function FloatingBlobs({ variant = "default" }: FloatingBlobsProps) {
  if (variant === "background") {
    return (
      <div
        className="landing-mobile-ambient-bg pointer-events-none absolute inset-0 z-0"
        aria-hidden
      />
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
