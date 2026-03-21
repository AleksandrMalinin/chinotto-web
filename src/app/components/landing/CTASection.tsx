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
          href="https://github.com/AleksandrMalinin/chinotto/releases/latest/download/Chinotto_1.0.0_aarch64.dmg"
          className="btn-landing-primary px-10 py-4 text-lg inline-block"
          data-umami-event="download-cta"
        >
          Download Chinotto{" "}
          <span className="opacity-80">β</span>
        </a>
        <p className="mt-4 text-sm text-landing-muted">
          Windows · Linux — coming soon
        </p>
      </Container>
    </Section>
  );
}
