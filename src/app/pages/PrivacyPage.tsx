import { ContentPageLayout } from "../components/landing/ContentPageLayout";

export function PrivacyPage() {
  return (
    <ContentPageLayout title="Privacy">
      <div className="max-w-2xl mx-auto space-y-10 text-landing-muted">
        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Privacy Policy
          </h2>
          <p>
            Chinotto is a local-first application. By default, your thoughts
            are stored on your device and are not collected by us.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Local-first by default
          </h2>
          <p>
            All entries are stored locally on your device. You can use Chinotto
            without creating an account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Data collection
          </h2>
          <p>
            Chinotto may collect minimal anonymous usage data to understand how
            the product is used and improve the experience.
          </p>
          <p>We do not collect:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>the content of your thoughts for analytics</li>
            <li>personal information</li>
            <li>search queries</li>
            <li>identifiable data</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Sync optional
          </h2>
          <p>
            Sync is optional.
          </p>
          <p>
            If you choose to enable sync, your thought data is securely
            transmitted and stored to provide access across your devices. Sync
            is only enabled when you sign in with Apple.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Third-party services
          </h2>
          <p>
            Chinotto may use third-party services for anonymous analytics and
            app functionality. These services do not receive your thought
            content for analytics purposes and do not access thought content
            unless required for sync.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Contact
          </h2>
          <p>
            For questions about this Privacy Policy, contact:{" "}
            <a
              href="mailto:hello@chinotto.app"
              className="text-landing-foreground hover:underline"
              data-umami-event="contact-email"
            >
              hello@chinotto.app
            </a>
          </p>
        </section>
      </div>
    </ContentPageLayout>
  );
}
