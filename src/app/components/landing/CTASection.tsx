import { Section } from "./Section";
import { Container } from "./Container";

export function CTASection() {
  return (
    <Section id="download">
      <Container size="3xl" className="text-center">
        <h2 className="text-4xl font-light mb-6 text-landing-foreground">
          Get the app
        </h2>
        <a
          href="#"
          className="btn-landing-primary px-10 py-4 text-lg inline-block"
        >
          Download for macOS
        </a>
        <p className="mt-4 text-sm text-landing-muted">
          Windows · Linux — coming soon
        </p>
      </Container>
    </Section>
  );
}
