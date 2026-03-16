import { ContentPageLayout } from "../components/landing/ContentPageLayout";

export function PrivacyPage() {
  return (
    <ContentPageLayout title="Privacy">
      <div className="max-w-2xl mx-auto space-y-10 text-landing-muted">
        <p>
          Chinotto is a local-first application. Your thoughts are stored only
          on your device.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Data collection
          </h2>
          <p>
            Chinotto collects minimal anonymous usage analytics to understand
            how the product is used and improve the experience.
          </p>
          <p>We never collect:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>the content of your thoughts</li>
            <li>personal information</li>
            <li>search queries</li>
            <li>identifiable data</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Local storage
          </h2>
          <p>
            Entry content never leaves your device. All data remains on your
            machine.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Contact
          </h2>
          <p>
            For questions about privacy:{" "}
            <a
              href="mailto:hello@chinotto.app"
              className="text-landing-foreground hover:underline"
            >
              hello@chinotto.app
            </a>
          </p>
        </section>
      </div>
    </ContentPageLayout>
  );
}
