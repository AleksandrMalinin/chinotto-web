import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="landing-card p-8 rounded-3xl">
      <div className="landing-icon-circle w-16 h-16 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-light mb-3 text-landing-foreground">
        {title}
      </h3>
      <p className="text-landing-muted">{description}</p>
    </div>
  );
}
