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
import { PreviewPage } from "./pages/PreviewPage";
import { PlaceholderLandingPage } from "./pages/PlaceholderLandingPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#download" || hash === "#principles") {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-landing-bg">
      <Header logoHref="/preview" />
      <Hero />
      <FloatingBlobs />
      <PrinciplesStrip />
      <ProductMockup />
      <CTASection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PlaceholderLandingPage />} />
      <Route path="/full" element={<LandingPage />} />
      <Route path="/showcase" element={<LogoShowcasePage />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/manifesto" element={<ManifestoPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
