import { cn } from "../ui/utils";

export const screenshotCardClass =
  "rounded-2xl overflow-hidden border border-landing-card-border shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(139,148,200,0.08)]";

interface ScreenshotFrameProps {
  src: string;
  alt: string;
  /** Quiet platform note below the frame (e.g. “On Mac” on mobile landing). */
  platformCaption?: string;
  className?: string;
  imgClassName?: string;
}

/** Product screenshot — frame only, no overlay labels. */
export function ScreenshotFrame({
  src,
  alt,
  platformCaption,
  className,
  imgClassName,
}: ScreenshotFrameProps) {
  return (
    <figure className={cn(className)}>
      <div className={screenshotCardClass}>
        <img
          src={src}
          alt={alt}
          className={cn("block h-auto w-full select-none", imgClassName)}
          decoding="async"
          draggable={false}
        />
      </div>
      {platformCaption ? (
        <figcaption className="landing-caption mt-3 text-center">
          {platformCaption}
        </figcaption>
      ) : null}
    </figure>
  );
}
