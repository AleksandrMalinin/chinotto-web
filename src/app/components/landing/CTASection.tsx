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
      <Container size="3xl" className="text-center px-4">
        <div className="mx-auto flex w-full max-w-[32rem] flex-col items-center">
          <h2 className="mb-3 text-[2.125rem] font-normal tracking-[-0.03em] text-landing-foreground sm:text-[2.375rem] md:mb-4">
            Get Chinotto
          </h2>

          <div className="flex w-full max-w-md flex-col items-stretch gap-2 sm:mx-auto sm:flex-row sm:items-center sm:justify-center sm:gap-2.5">
            <a
              href={CHINOTTO_MAC_DOWNLOAD_URL}
              className="btn-landing-primary px-9 py-3.5 text-base motion-safe:transition motion-safe:duration-200 motion-safe:hover:scale-[1.02] motion-reduce:hover:scale-100 inline-block text-center sm:inline-block"
              data-umami-event="download-cta"
            >
              Download for Mac
            </a>
            {iosStoreUrl ? (
              <a
                href={iosStoreUrl}
                className="btn-landing-secondary px-9 py-3.5 text-base inline-block border-white/[0.14] text-landing-muted/80 opacity-95 transition-[opacity,border-color,color] duration-200 hover:border-white/22 hover:text-landing-muted hover:opacity-100 motion-safe:hover:scale-[1.01] motion-reduce:hover:scale-100 text-center sm:inline-block"
                data-umami-event="download-cta-ios"
                rel="noreferrer"
                target="_blank"
              >
                Get on iPhone
              </a>
            ) : (
              <span className="inline-block rounded-md border border-white/12 px-9 py-3.5 text-base font-light text-landing-muted/55">
                Get on iPhone
              </span>
            )}
          </div>

          <p className="mt-3 text-xs leading-relaxed text-landing-muted/45">
            Windows and Linux — coming soon
          </p>
        </div>
      </Container>
    </Section>
  );
}
