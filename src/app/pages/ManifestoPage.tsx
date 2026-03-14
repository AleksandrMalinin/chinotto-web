import { ContentPageLayout } from "../components/landing/ContentPageLayout";

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
          has had time to settle. Not before.
        </p>
        <p>
          Your data stays on your machine. No cloud required, no account, no
          sync. The tool is there when you need it and out of the way when you
          don’t.
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
