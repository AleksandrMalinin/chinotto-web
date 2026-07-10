import { useEffect, useState } from "react";
import { CHINOTTO_IOS_APP_STORE_URL } from "../../content/links";

/** App Store bar — appears after hero scrolls away. */
export function MobileStickyCta() {
  const iosStoreUrl = CHINOTTO_IOS_APP_STORE_URL.trim();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!iosStoreUrl || !hero || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setVisible(entry.intersectionRatio < 0.08);
      },
      { threshold: [0, 0.08, 0.2] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [iosStoreUrl]);

  if (!iosStoreUrl || !visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-landing-bg/94 px-4 pt-3 backdrop-blur-md pb-[max(0.85rem,env(safe-area-inset-bottom))]"
      aria-hidden={false}
    >
      <a
        href={iosStoreUrl}
        className="btn-landing-primary block w-full py-3 text-center text-base"
        data-umami-event="app-store-sticky"
        rel="noreferrer"
        target="_blank"
      >
        Get on iPhone
      </a>
    </div>
  );
}
