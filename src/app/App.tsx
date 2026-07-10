import { Routes, Route, useLocation } from "react-router";
import { useEffect, useLayoutEffect } from "react";
import {
  CTASection,
  FloatingBlobs,
  Footer,
  Header,
  Hero,
  LandingEnhancements,
  LandingScrollWash,
  LandingStorySections,
  LogoShowcasePage,
} from "./components/landing";
import { useMinMd } from "./hooks/useMinMd";
import { ManifestoPage } from "./pages/ManifestoPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MobileLandingPage } from "./pages/MobileLandingPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { NotesPage } from "./pages/UpdatesPage";

const LANDING_HASH_TARGETS = new Set([
  "#download",
  "#problem",
  "#resurfacing",
  "#sharing",
  "#capture",
  "#connected",
  "#two-experiences",
  "#local-first",
  "#positioning",
]);

function useLandingHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (LANDING_HASH_TARGETS.has(hash)) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
}

function DesktopLandingPage() {
  return (
    <div className="relative min-h-screen bg-landing-bg">
      <LandingScrollWash />
      <div className="relative z-10">
        <Header />
        <Hero />
        <FloatingBlobs />
        <LandingStorySections />
        <CTASection />
        <Footer />
        <LandingEnhancements />
      </div>
    </div>
  );
}

/** Main route: one viewport branch only — avoids double layout + mockup work. */
function MainLandingPage() {
  const isDesktop = useMinMd();
  useLandingHashScroll();
  return isDesktop ? <DesktopLandingPage /> : <MobileLandingPage />;
}

/** Reset scroll on SPA navigations so new routes paint from the top (esp. mobile). */
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        {/* Universal Link path; same UI as / — no 404 for /sync */}
        <Route path="/sync" element={<MainLandingPage />} />
        <Route path="/showcase" element={<LogoShowcasePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="/changelog" element={<NotesPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/updates" element={<NotesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
