import { useState } from "react";
import { Section } from "./Section";
import { Container } from "./Container";
import { MacDownloadMobileDialog } from "./MacDownloadMobileDialog";
import { useMinMd } from "../../hooks/useMinMd";
import {
  CHINOTTO_IOS_APP_STORE_URL,
  CHINOTTO_MAC_DOWNLOAD_URL,
} from "../../content/links";

export function CTASection() {
  const isDesktop = useMinMd();
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();
  const [macModalOpen, setMacModalOpen] = useState(false);

  const macPrimaryClass =
    "btn-landing-primary px-9 py-3.5 text-base motion-safe:transition motion-safe:duration-200 motion-safe:hover:scale-[1.02] motion-reduce:hover:scale-100 inline-block text-center w-full sm:w-auto";
  const macSecondaryClass =
    "btn-landing-secondary px-9 py-3.5 text-base inline-block border-white/[0.14] text-landing-muted/80 opacity-95 transition-[opacity,border-color,color] duration-200 hover:border-white/22 hover:text-landing-muted hover:opacity-100 motion-safe:hover:scale-[1.01] motion-reduce:hover:scale-100 text-center w-full sm:w-auto";
  const iosPrimaryClass = macPrimaryClass;
  const iosSecondaryClass = macSecondaryClass;

  const macCta = isDesktop ? (
    <a
      href={CHINOTTO_MAC_DOWNLOAD_URL}
      className={macPrimaryClass}
      data-umami-event="download-cta"
    >
      Download for Mac
    </a>
  ) : (
    <button
      type="button"
      onClick={() => setMacModalOpen(true)}
      className={iosStoreUrl ? macSecondaryClass : macPrimaryClass}
      data-umami-event="download-placeholder"
    >
      Download for Mac
    </button>
  );

  const iosCta = iosStoreUrl ? (
    <a
      href={iosStoreUrl}
      className={isDesktop ? iosSecondaryClass : iosPrimaryClass}
      data-umami-event="download-cta-ios"
      rel="noreferrer"
      target="_blank"
    >
      Get on iPhone
    </a>
  ) : (
    <span className="inline-block w-full rounded-md border border-white/12 px-9 py-3.5 text-center text-base font-light text-landing-muted/55 sm:w-auto">
      Get on iPhone
    </span>
  );

  return (
    <>
      <Section id="download">
        <Container size="3xl" className="text-center px-4">
          <div className="mx-auto flex w-full max-w-[32rem] flex-col items-center">
            <h2 className="landing-heading mb-3 md:mb-4">Get Chinotto</h2>

            <div className="flex w-full max-w-md flex-col items-stretch gap-2 sm:mx-auto sm:flex-row sm:items-center sm:justify-center sm:gap-2.5">
              {isDesktop ? (
                <>
                  {macCta}
                  {iosCta}
                </>
              ) : (
                <>
                  {iosCta}
                  {macCta}
                </>
              )}
            </div>

            {isDesktop ? (
              <p className="landing-caption mt-3">
                Windows and Linux — coming soon
              </p>
            ) : null}
          </div>
        </Container>
      </Section>

      <MacDownloadMobileDialog
        open={macModalOpen}
        onClose={() => setMacModalOpen(false)}
      />
    </>
  );
}
