import { ContentPageLayout } from "../components/landing/ContentPageLayout";

/**
 * Plain statements aligned with desktop + mobile: local default, sync via Apple,
 * opt-in Mac analytics, site analytics only on this domain—no invented data flows.
 */
export function PrivacyPage() {
  return (
    <ContentPageLayout title="Privacy">
      <div className="max-w-2xl mx-auto space-y-10 text-landing-muted">
        <p>
          Chinotto is local-first. Unless you enable sync, your thoughts stay on
          the device where you capture them.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Optional sync
          </h2>
          <p>
            When sync is on, you sign in with Apple so your Mac and iPhone can
            keep the same stream in step. Chinotto does not run its own
            account—Sign in with Apple is there to link the devices you choose.
            Synced data is sent over an encrypted connection and exists to
            reconcile your thoughts across those devices. You can stop syncing
            from the app on each device.
          </p>
          <p>
            Where sync is offered as a paid option, purchase goes through Apple
            on iPhone.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            Analytics
          </h2>
          <p>
            The Mac app may ask to send opt-in, anonymous usage events so we can
            understand how the product is used. Those events do not include the
            text of your thoughts or what you search for. If you decline—or
            analytics is not enabled in your build—nothing is sent.
          </p>
          <p>
            This website uses a small script to measure visits and interactions
            on{" "}
            <span className="text-landing-foreground">getchinotto.app</span>
            . It does not access data inside the Mac or iPhone apps.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-light text-landing-foreground">
            What we do not do
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>use your thoughts for advertising</li>
            <li>
              give you a Chinotto login—optional sync relies on Sign in with
              Apple when you turn it on
            </li>
          </ul>
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
