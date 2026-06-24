import { ContentPageLayout } from "../components/landing/ContentPageLayout";
import {
  continuityBelief,
  continuityClose,
  continuityIntro,
  continuityLead,
  continuityQuestion,
  continuityThreads,
  heroSloganLine1,
  heroSloganLine2,
  manifestoPlatformRoles,
  manifestoSyncNote,
} from "../content/continuity";

export function ManifestoPage() {
  return (
    <ContentPageLayout
      title="Chinotto Manifesto"
      description="Chinotto helps unfinished personal thought pick up where it left off — across desktop and mobile."
    >
      <div className="max-w-2xl mx-auto space-y-8 text-landing-muted">
        <p className="text-landing-foreground font-light">{continuityLead}</p>

        {continuityIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <p className="text-landing-foreground font-light">{continuityQuestion}</p>

        <p>{continuityBelief}</p>

        <p>{continuityThreads}</p>

        <p>{manifestoPlatformRoles.desktop}</p>

        <p>{manifestoPlatformRoles.mobile}</p>

        <p>{continuityClose}</p>

        <p>{manifestoSyncNote}</p>

        <p className="text-landing-foreground font-light">
          {heroSloganLine1}
          <br />
          {heroSloganLine2}
        </p>
      </div>
    </ContentPageLayout>
  );
}
