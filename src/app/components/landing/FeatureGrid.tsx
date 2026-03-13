import { Container } from "./Container";
import { FeatureCard } from "./FeatureCard";
import { Section } from "./Section";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="10" stroke="#8a94c8" strokeWidth="2" />
        <circle cx="16" cy="16" r="3" fill="#8a94c8" />
      </svg>
    ),
    title: "Instant Capture",
    description:
      "Drop thoughts as they come. No folders, tags, or structure needed upfront.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="12" r="4" fill="#8a94c8" />
        <circle cx="20" cy="20" r="4" fill="#8a94c8" />
        <line x1="15" y1="15" x2="17" y2="17" stroke="#8a94c8" strokeWidth="2" />
      </svg>
    ),
    title: "Recover Context",
    description:
      "Find related thoughts and rebuild your thinking flow when you need it.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="8"
          y="8"
          width="16"
          height="16"
          rx="8"
          stroke="#8a94c8"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Stay Minimal",
    description:
      "Clean interface that stays out of your way. Focus on thinking, not organizing.",
  },
];

export function FeatureGrid() {
  return (
    <Section>
      <Container size="6xl">
        <h2 className="text-4xl font-light text-center mb-16 text-landing-foreground">
          Capture. Recover. Stay minimal.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
