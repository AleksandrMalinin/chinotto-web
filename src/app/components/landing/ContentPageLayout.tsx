import type { ReactNode } from "react";
import { useMinMd } from "../../hooks/useMinMd";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";
import { FloatingBlobs } from "./FloatingBlobs";

interface ContentPageLayoutProps {
  title: string;
  children: ReactNode;
}

/**
 * Shared layout for static content pages (privacy, manifesto).
 * Desktop: header, main, footer. Mobile: same Header as home, static ambient bg (no blur), signature.
 */
export function ContentPageLayout({ title, children }: ContentPageLayoutProps) {
  const isDesktop = useMinMd();

  if (isDesktop) {
    return (
      <div className="flex min-h-screen flex-col bg-landing-bg">
        <Header logoHref="/" />
        <main className="flex-1 px-8 py-16">
          <Container size="3xl">
            <h1 className="mb-8 text-3xl font-light text-landing-foreground">
              {title}
            </h1>
            <div className="max-w-none space-y-6 text-landing-muted [&_p]:leading-relaxed">
              {children}
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-landing-bg">
      <FloatingBlobs variant="background" />
      <Header logoHref="/" hideDownloadButton />
      <main className="relative z-10 flex-1 px-8 pt-8 pb-24">
        <h1 className="mb-6 text-2xl font-light text-landing-foreground">
          {title}
        </h1>
        <div className="space-y-6 text-landing-muted [&_p]:leading-relaxed">
          {children}
        </div>
      </main>
      <div className="app-studio-signature" aria-hidden="true">
        <span>Bogart Labs</span>
      </div>
    </div>
  );
}
