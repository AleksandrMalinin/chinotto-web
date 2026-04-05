import { Section } from "./Section";
import { Container } from "./Container";

/**
 * Optional sync as continuity, not specs—tighter sentences, ownership split out for clarity.
 */
export function OptionalSyncSection() {
  return (
    <Section className="py-16">
      <Container size="3xl" className="text-center">
        <p className="text-xl font-light text-landing-foreground-strong tracking-tight leading-snug max-w-xl mx-auto">
          Your thoughts, wherever you are.
        </p>
        <p className="mt-5 text-base font-light text-landing-muted leading-relaxed max-w-xl mx-auto">
          Optional sync extends your stream across Mac and iPhone—only when you
          want that continuity. Local-first stays the default. Your thoughts stay
          yours. No separate Chinotto account.
        </p>
      </Container>
    </Section>
  );
}
