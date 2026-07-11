import { useEffect, useState } from "react";
import { CHINOTTO_IOS_APP_STORE_URL } from "../../content/links";
import {
  LandingScrollTopButton,
  useLandingScrollTopVisible,
} from "./LandingScrollTop";

/** App Store bar — appears after hero scrolls away; back-to-top joins on deep scroll. */
export function MobileStickyCta() {
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();
  const [barVisible, setBarVisible] = useState(false);
  const scrollTopVisible = useLandingScrollTopVisible();

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!iosStoreUrl || !hero || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setBarVisible(entry.intersectionRatio < 0.08);
      },
      { threshold: [0, 0.08, 0.2] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [iosStoreUrl]);

  if (!iosStoreUrl || !barVisible) return null;

  return (
    <div className="landing-sticky-bar" aria-hidden={false}>
      <div className="landing-sticky-bar__row">
        <a
          href={iosStoreUrl}
          className="btn-landing-primary min-w-0 flex-1 py-3 text-center text-base"
          data-umami-event="app-store-sticky"
          rel="noreferrer"
          target="_blank"
        >
          Get on iPhone
        </a>
        {scrollTopVisible ? (
          <LandingScrollTopButton
            className="landing-scroll-top--bar"
            umamiEvent="scroll-top-mobile"
          />
        ) : null}
      </div>
    </div>
  );
}
