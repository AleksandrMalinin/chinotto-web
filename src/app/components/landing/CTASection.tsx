import { Section } from "./Section";
import { Container } from "./Container";
import {
  CHINOTTO_IOS_APP_STORE_URL,
  CHINOTTO_MAC_DOWNLOAD_URL,
} from "../../content/links";

export function CTASection() {
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();

  return (
    <Section id="download">
      <Container size="3xl" className="text-center">
        <h2 className="text-4xl font-light mb-6 text-landing-foreground">
          Get Chinotto
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={CHINOTTO_MAC_DOWNLOAD_URL}
            className="btn-landing-primary px-10 py-4 text-lg inline-block"
            data-umami-event="download-cta"
          >
            Download for Mac
          </a>
          {iosStoreUrl ? (
            <a
              href={iosStoreUrl}
              className="btn-landing-secondary px-10 py-4 text-lg inline-block"
              data-umami-event="download-cta-ios"
              rel="noreferrer"
              target="_blank"
            >
              App Store — iPhone
            </a>
          ) : (
            <span className="inline-block px-10 py-4 text-lg font-light text-landing-muted border border-landing-border-subtle rounded-md">
              iPhone — App Store
            </span>
          )}
        </div>
        <p className="mt-4 text-sm text-landing-muted">
          Windows · Linux — coming soon
        </p>
      </Container>
    </Section>
  );
}
