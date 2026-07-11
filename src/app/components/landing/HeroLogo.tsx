import type { ReactNode } from "react";
import { Link } from "react-router";
import { ChinottoLogo } from "../ChinottoLogo";
import { cn } from "../ui/utils";

export const HERO_LOGO_SIZE_MOBILE = 88;
export const HERO_LOGO_SIZE_DESKTOP = 112;

export const heroLogoWrapClass =
  "placeholder-logo-wrap inline-flex rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg";

/** Shared top offset + spacing so hero and showcase logos sit in the same place. */
export function HeroLogoStage({
  children,
  className,
  tight,
}: {
  children: ReactNode;
  className?: string;
  /** Drop bottom margin when the next block controls vertical rhythm (e.g. showcase title). */
  tight?: boolean;
}) {
  return (
    <div
      className={cn("hero-logo-stage", tight && "hero-logo-stage--tight", className)}
    >
      {children}
    </div>
  );
}

export function HeroLogoLink({
  size,
  umamiEvent,
  className,
}: {
  size: number;
  umamiEvent: string;
  className?: string;
}) {
  return (
    <Link
      to="/showcase"
      className={cn(heroLogoWrapClass, className)}
      aria-label="Logo showcase"
      data-umami-event={umamiEvent}
    >
      <ChinottoLogo size={size} className="text-landing-accent" />
    </Link>
  );
}
