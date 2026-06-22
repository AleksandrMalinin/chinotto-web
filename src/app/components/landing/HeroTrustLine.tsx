import { Link } from "react-router";
import { productUpdates } from "../../content/updates";
import { cn } from "../ui/utils";

/** Latest release note below hero CTAs — same copy as before, placement below buttons. */
export function HeroTrustLine({ className }: { className?: string }) {
  const latestUpdate = productUpdates[0];
  if (!latestUpdate?.milestone) return null;

  return (
    <div
      className={cn(
        "mx-auto max-w-lg border-t border-white/[0.1] pt-7",
        className,
      )}
    >
      <p className="landing-caption text-center">
        <span className="tabular-nums tracking-tight text-landing-note-violet">{`v${latestUpdate.version}`}</span>
        <span className="text-landing-muted/88">
          {latestUpdate.title ? ` — ${latestUpdate.title} · ` : " · "}
        </span>
        <Link
          to="/changelog"
          className="text-landing-accent underline decoration-transparent underline-offset-[0.15em] transition-colors hover:text-landing-accent-hover hover:decoration-landing-accent/35"
          data-umami-event="hero-trust-updates"
        >
          Updates
        </Link>
      </p>
    </div>
  );
}
