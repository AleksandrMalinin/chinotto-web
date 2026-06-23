import { useEffect, useState } from "react";
import { cn } from "../ui/utils";
import { screenshotCardClass, mockupCardHoverClass } from "./ScreenshotFrame";

interface ProductVideoFrameProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}

/** Looping product clip in the screenshot frame — poster when motion is reduced. */
export function ProductVideoFrame({
  src,
  poster,
  alt,
  className,
}: ProductVideoFrameProps) {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlayVideo(!mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <figure className={cn(className)}>
      <div className={cn(screenshotCardClass, mockupCardHoverClass)}>
        {playVideo ? (
          <video
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="block h-auto w-full select-none"
            aria-label={alt}
          />
        ) : (
          <img
            src={poster}
            alt={alt}
            className="block h-auto w-full select-none"
            decoding="async"
            draggable={false}
          />
        )}
      </div>
    </figure>
  );
}
