import { Section } from "./Section";
import { Container } from "./Container";

export function ProductMockup() {
  return (
    <Section>
      <Container size="4xl" className="flex justify-center">
        <div
          className="
            w-full max-w-xl rounded-2xl overflow-hidden
            border border-landing-card-border
            shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(139,148,200,0.08)]
            transition-transform duration-200 ease-out
            hover:-translate-y-1
          "
        >
          <img
            src="/chinotto-mockup.png"
            alt="Chinotto app interface"
            className="w-full h-auto block"
          />
        </div>
      </Container>
    </Section>
  );
}
