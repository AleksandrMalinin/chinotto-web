import { useEffect, useState } from "react";

const MD_MEDIA = "(min-width: 768px)";

/**
 * `true` when viewport is Tailwind `md` and up. Client-only initializer avoids
 * mounting both mobile + desktop trees (saves layout, effects, and animated blobs).
 */
export function useMinMd(): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(MD_MEDIA).matches
      : false,
  );

  useEffect(() => {
    const mql = window.matchMedia(MD_MEDIA);
    const onChange = () => setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return matches;
}
