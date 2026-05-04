import { lazy, Suspense } from "react";
import { Section } from "./Section";
import { Container } from "./Container";

/** Split: Mac + stage mockups (~1.4MB PNG refs) load only when this section mounts (desktop landing). */
const ProductMockupVisuals = lazy(() =>
  import("./ProductMockup").then((m) => ({ default: m.ProductMockupVisuals })),
);

const PRINCIPLES = [
  "Capture first",
  "No structure",
  "Local-first",
  "Optional sync",
] as const;

export function OptionalSyncSection() {
  return (
    <Section id="principles" className="!py-20 md:!py-28 lg:!py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6 text-center sm:px-8 lg:px-10 xl:px-12">
        <div className="border-b border-landing-card-border pb-4">
          <div className="mx-auto max-w-[640px]">
            <ul
              className="flex flex-wrap justify-center gap-y-3"
              aria-label="Product principles"
            >
              {PRINCIPLES.map((label, index) => (
                <li
                  key={label}
                  className="flex items-center text-sm font-normal leading-snug tracking-[0.06em] text-landing-foreground/65 md:text-[0.9375rem]"
                >
                  <span>{label}</span>
                  {index < PRINCIPLES.length - 1 && (
                    <span
                      className="mx-5 select-none text-landing-muted/40 md:mx-7"
                      aria-hidden
                    >
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-[42rem]">
          <h2 className="mt-4 mb-0 text-[1.875rem] font-light leading-[1.1] tracking-[-0.035em] text-landing-foreground-strong md:text-[2.25rem] lg:text-[2.5rem] lg:leading-[1.08]">
            Your thoughts stay yours.
          </h2>

          <p className="mt-6 mb-0 text-lg font-light leading-relaxed text-landing-muted md:text-[1.0625rem] md:leading-[1.65]">
            Sync extends your stream across Mac and iPhone — only when you want
            it.
          </p>

          <div className="mt-4 space-y-1 border-t border-landing-card-border pt-2 text-[0.9375rem] font-light leading-relaxed text-landing-muted/70">
            <p>Local-first by default.</p>
            <p>No separate account required.</p>
          </div>
        </div>
      </div>

      <Container
        size="6xl"
        className="mt-24 overflow-visible md:mt-28 lg:mt-32"
      >
        <Suspense
          fallback={
            <div
              className="min-h-[min(70vh,36rem)] w-full md:min-h-[40rem]"
              aria-hidden
            />
          }
        >
          <ProductMockupVisuals />
        </Suspense>
      </Container>
    </Section>
  );
}
