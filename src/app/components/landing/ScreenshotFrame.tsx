import { cn } from "../ui/utils";
import type { ProductScreenshot } from "../../content/productScreenshots";
import { ScreenshotPlaceholder } from "./ScreenshotPlaceholder";

export const screenshotCardClass =
  "rounded-2xl overflow-hidden border border-landing-card-border shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(139,148,200,0.08)]";

/** Subtle lift on pointer devices — pair with screenshotCardClass. */
export const mockupCardHoverClass = "mockup-card-hover";

/** Phone frame lift — drop-shadow reads on SVG device chrome. */
export const mockupPhoneHoverClass = "mockup-phone-hover";

/** 60/40 media/copy split on lg — real column width, no transform bleed. */
export function showcaseGridClass(imageFirst: boolean) {
  return imageFirst
    ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]"
    : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]";
}

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
      <div className={cn(screenshotCardClass, mockupCardHoverClass)}>
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

interface MobileDesktopDetailProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

/** Large desktop UI fragment on narrow viewports — Cursor-style full-bleed detail shot. */
export function MobileDesktopDetail({
  src,
  alt,
  caption = "On Mac",
  className,
}: MobileDesktopDetailProps) {
  return (
    <figure className={cn("landing-mobile-detail", className)}>
      <div className="landing-mobile-detail__frame">
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full select-none"
          decoding="async"
          draggable={false}
        />
      </div>
      {caption ? (
        <figcaption className="landing-caption mt-3 text-center text-landing-muted/75">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

interface ProductScreenshotMediaProps {
  screenshot: ProductScreenshot;
  placeholderLabel?: string;
  placeholderHint?: string;
  platformCaption?: string;
  className?: string;
}

/** Renders a product screenshot or a launch placeholder when `pending`. */
export function ProductScreenshotMedia({
  screenshot,
  placeholderLabel,
  placeholderHint,
  platformCaption,
  className,
}: ProductScreenshotMediaProps) {
  if (screenshot.pending) {
    return (
      <ScreenshotPlaceholder
        label={placeholderLabel ?? screenshot.alt}
        assetHint={placeholderHint}
        className={className}
      />
    );
  }

  return (
    <ScreenshotFrame
      src={screenshot.src}
      alt={screenshot.alt}
      platformCaption={platformCaption}
      className={className}
    />
  );
}

interface ResponsiveProductScreenshotProps extends ProductScreenshotMediaProps {
  /** Caption under the mobile detail crop (default “On Mac”). */
  mobileCaption?: string;
}

/**
 * md+: full desktop screenshot. Below md: pre-cropped detail when `mobileDetailSrc` is set.
 * Pending assets: placeholder on desktop only — no mobile visual.
 */
export function ResponsiveProductScreenshot({
  screenshot,
  placeholderLabel,
  placeholderHint,
  platformCaption,
  mobileCaption = "On Mac",
  className,
}: ResponsiveProductScreenshotProps) {
  if (screenshot.pending) {
    return (
      <ScreenshotPlaceholder
        label={placeholderLabel ?? screenshot.alt}
        assetHint={placeholderHint}
        className={cn("hidden md:block", className)}
      />
    );
  }

  const mobileDetail = screenshot.mobileDetailSrc;

  return (
    <>
      <ScreenshotFrame
        src={screenshot.src}
        alt={screenshot.alt}
        platformCaption={platformCaption}
        className={cn("hidden md:block", className)}
      />
      {mobileDetail ? (
        <MobileDesktopDetail
          src={mobileDetail}
          alt={screenshot.alt}
          caption={mobileCaption}
          className={cn("md:hidden", className)}
        />
      ) : null}
    </>
  );
}
