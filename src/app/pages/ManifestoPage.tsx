import { ContentPageLayout } from "../components/landing/ContentPageLayout";

/**
 * Same arc as the homepage: capture first, local-first, sync only when chosen—
 * thoughts/stream wording matches in-app language; optional Mac lenses named once.
 */
export function ManifestoPage() {
  return (
    <ContentPageLayout title="Chinotto Manifesto">
      <div className="max-w-2xl mx-auto space-y-8 text-landing-muted">
        <p>
          Thinking rarely starts structured.
        </p>
        <p>
          Most tools assume the opposite. They ask you to create a document. A
          folder. A workspace. Before you even know what the thought is.
        </p>
        <p>
          So you name things, you organize, you plan—and the thought slips away.
          Or you never write it down at all, because the friction is too high.
        </p>
        <p>
          Chinotto is built for the moment the thought appears. You open it, you
          put it somewhere, you close it. No project to create, no hierarchy to
          maintain. Just capture.
        </p>
        <p>
          Structure can come later—when you actually need it, when the thought
          has had time to settle. Not before. On Mac, optional context lenses—Inbox,
          Work, Personal—separate threads when you want to, without folders or a
          workspace to set up first. One timeline; a filter, not a second system.
        </p>
        <p>
          Your thoughts stay local-first on your devices until you choose
          otherwise. Sync is optional and intentional: Sign in with Apple when you
          want the same entries on Mac and iPhone. iPhone stays one chronological
          capture stream; Mac can use those lenses on desktop when you want that
          separation. There is no Chinotto account—only that link, when you ask for
          it.
        </p>
        <p>
          The premise is not cloud by default. It is capture without ceremony:
          ownership and quiet by default.
        </p>
        <p className="text-landing-foreground font-light">
          Capture first.
          <br />
          Revisit later.
        </p>
      </div>
    </ContentPageLayout>
  );
}
