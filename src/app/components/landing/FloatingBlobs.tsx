interface FloatingBlobsProps {
  /** Full-bleed ambient wash — mobile/content routes; CPU-only (no blur filters). */
  variant?: "default" | "background";
}

export function FloatingBlobs({ variant = "default" }: FloatingBlobsProps) {
  if (variant === "background") {
    return (
      <div
        className="landing-mobile-ambient-bg pointer-events-none"
        aria-hidden
      />
    );
  }

  return (
    <div className="relative mx-auto mb-20 h-64 max-w-6xl">
      <div
        className="absolute top-0 left-1/4 h-32 w-32 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "#7C3AED" }}
      />
      <div
        className="absolute top-20 right-1/4 h-40 w-40 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "#06B6D4" }}
      />
      <div
        className="absolute top-10 left-1/2 h-36 w-36 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: "#F97316" }}
      />
    </div>
  );
}
