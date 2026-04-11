import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import {
  CTASection,
  FloatingBlobs,
  Footer,
  Header,
  Hero,
  LogoShowcasePage,
  PrinciplesStrip,
  ProductMockup,
} from "./components/landing";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ManifestoPage } from "./pages/ManifestoPage";
import { NotesPage } from "./pages/UpdatesPage";
import { PlaceholderLandingPage } from "./pages/PlaceholderLandingPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function DesktopLandingPage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#download" || hash === "#principles") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-landing-bg">
      <Header />
      <Hero />
      <FloatingBlobs />
      <PrinciplesStrip />
      <ProductMockup />
      <CTASection />
      <Footer />
    </div>
  );
}

/** Main route: mobile = PlaceholderLandingPage, desktop = full landing */
function MainLandingPage() {
  return (
    <>
      <div className="md:hidden">
        <PlaceholderLandingPage />
      </div>
      <div className="hidden md:block">
        <DesktopLandingPage />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />} />
      {/* Universal Link path (mobile); same shell as home — no separate marketing copy */}
      <Route path="/sync" element={<MainLandingPage />} />
      <Route path="/showcase" element={<LogoShowcasePage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/manifesto" element={<ManifestoPage />} />
      <Route path="/changelog" element={<NotesPage />} />
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/updates" element={<NotesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
