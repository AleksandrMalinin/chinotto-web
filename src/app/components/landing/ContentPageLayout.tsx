import type { ReactNode } from "react";
import { ChinottoLogo } from "../ChinottoLogo";
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
 * Desktop: header, main, footer. Mobile: same visual style as main page (FloatingBlobs, minimal chrome, signature).
 */
export function ContentPageLayout({ title, children }: ContentPageLayoutProps) {
  return (
    <div className="min-h-screen bg-landing-bg">
      {/* Mobile: main-page style */}
      <div className="relative flex min-h-screen flex-col overflow-hidden md:hidden">
        <FloatingBlobs variant="background" mouse={null} />
        <header className="relative z-10 px-6 pt-6">
          <a
            href="/"
            className="inline-flex rounded-md transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-accent focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
            aria-label="Home"
            data-umami-event="home-logo-mobile"
          >
            <ChinottoLogo size={36} className="text-landing-accent" />
          </a>
        </header>
        <main className="relative z-10 flex-1 px-6 py-8 pb-24">
          <h1 className="text-2xl font-light text-landing-foreground mb-6">
            {title}
          </h1>
          <div className="text-landing-muted prose prose-invert max-w-none">
            {children}
          </div>
        </main>
        <div className="app-studio-signature" aria-hidden="true">
          <span>Bogart Labs</span>
        </div>
      </div>

      {/* Desktop: header + main + footer */}
      <div className="hidden min-h-screen md:flex md:flex-col">
        <Header logoHref="/" />
        <main className="flex-1 py-16 px-8">
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
    </div>
  );
}
