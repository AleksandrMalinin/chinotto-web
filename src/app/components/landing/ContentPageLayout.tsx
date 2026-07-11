import type { ReactNode } from "react";
import { useMinMd } from "../../hooks/useMinMd";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { BogartLabsSignature } from "./BogartLabsSignature";
import { Container } from "./Container";

interface ContentPageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
}

/**
 * Shared layout for static content pages (privacy, manifesto).
 * Desktop: header, main, footer. Mobile: same Header as home, static ambient bg (no blur), signature.
 */
export function ContentPageLayout({
  title,
  description,
  children,
}: ContentPageLayoutProps) {
  const isDesktop = useMinMd();

  useDocumentMeta({ title, description });

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
    <div className="landing-mobile-page relative flex min-h-screen flex-col overflow-x-clip">
      <Header logoHref="/" hideDownloadButton />
      <main className="relative z-10 flex-1 px-8 pt-8 pb-24">
        <h1 className="mb-6 text-2xl font-light text-landing-foreground">
          {title}
        </h1>
        <div className="space-y-6 text-landing-muted [&_p]:leading-relaxed">
          {children}
        </div>
      </main>
      <BogartLabsSignature variant="floating" />
    </div>
  );
}
