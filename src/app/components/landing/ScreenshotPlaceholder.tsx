import { cn } from "../ui/utils";
import { screenshotCardClass } from "./ScreenshotFrame";

interface ScreenshotPlaceholderProps {
  /** Short label shown inside the frame (e.g. “Shared thread preview”). */
  label: string;
  /** Dev note — swap `src/assets/…` filename before launch. */
  assetHint?: string;
  className?: string;
}

/**
 * Stand-in frame for product screenshots not captured yet.
 * Same outer chrome as ScreenshotFrame — drop in a real image when ready.
 */
export function ScreenshotPlaceholder({
  label,
  assetHint,
  className,
}: ScreenshotPlaceholderProps) {
  return (
    <figure className={cn(className)}>
      <div
        className={cn(
          screenshotCardClass,
          "flex aspect-[16/10] min-h-[200px] flex-col items-center justify-center gap-3 bg-[linear-gradient(165deg,color-mix(in_srgb,var(--landing-card-border)_18%,var(--landing-bg))_0%,var(--landing-bg)_55%)] px-8 py-12",
        )}
        aria-hidden
      >
        <span className="size-[5px] rounded-full border border-[rgba(139,148,200,0.35)] bg-[rgba(139,148,200,0.42)]" />
        <p className="landing-caption max-w-[14rem] text-center text-landing-muted/80">
          {label}
        </p>
        {assetHint ? (
          <p className="font-mono text-[10px] tracking-wide text-landing-muted/45">
            {assetHint}
          </p>
        ) : null}
      </div>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}
