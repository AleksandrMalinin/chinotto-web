import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`px-6 py-14 sm:px-8 sm:py-20 ${className}`.trim()}>
      {children}
    </section>
  );
}
