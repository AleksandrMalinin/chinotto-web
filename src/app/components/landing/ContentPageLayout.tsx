import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";

interface ContentPageLayoutProps {
  title: string;
  children: ReactNode;
}

/**
 * Shared layout for static content pages (privacy, manifesto).
 * Same header/footer as landing; logo links to home.
 */
export function ContentPageLayout({ title, children }: ContentPageLayoutProps) {
  return (
    <div className="min-h-screen bg-landing-bg">
      <Header logoHref="/" />
      <main className="py-16 px-8">
        <Container size="3xl">
          <h1 className="text-3xl font-light text-landing-foreground mb-8">
            {title}
          </h1>
          <div className="text-landing-muted prose prose-invert max-w-none">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
