import { useRef, useState } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { MemoryEchoMoment } from "./MemoryEchoMoment";
import { StoryThreadBeat, StoryThreadList } from "./StoryThreadList";
import { TimeStrandRiver } from "./TimeStrandRiver";
import { showcaseGridClass } from "./ScreenshotFrame";
import {
  resurfacingEyebrow,
  resurfacingHeading,
  resurfacingStory,
} from "../../content/continuity";
import { cn } from "../ui/utils";

export function ResurfacingStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeBeat, setActiveBeat] = useState(0);

  const scrollToBeat = (beatIndex: number) => {
    const beat = sectionRef.current?.querySelector(
      `[data-story-beat="${beatIndex}"]`,
    );
    beat?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "center",
    });
  };

  return (
    <Section id="resurfacing" className="!py-12 md:!py-20 lg:!py-24">
      <div ref={sectionRef} className="mx-auto w-full max-w-[1100px] px-2">
        <Reveal>
          <p className="landing-eyebrow">{resurfacingEyebrow}</p>
          <h2 className="landing-heading mt-3 sm:mt-4">{resurfacingHeading}</h2>
        </Reveal>

        <div
          className={cn(
            "mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:gap-10 lg:items-start lg:gap-20",
            showcaseGridClass(true),
          )}
        >
          <Reveal className="min-w-0 lg:sticky lg:top-24">
            <div className="landing-depth-zone landing-depth-zone--has-echo">
              <div className="landing-memory-echo-slot hidden sm:block">
                <MemoryEchoMoment visible={activeBeat >= 1} />
              </div>
              <TimeStrandRiver
                activeBeatIndex={activeBeat}
                onStoryWeekSelect={scrollToBeat}
              />
            </div>
          </Reveal>

          <div className="min-w-0 lg:py-6">
            <StoryThreadList
              className="story-thread mt-0 lg:mt-0 lg:max-w-md"
              onActiveChange={setActiveBeat}
            >
              {resurfacingStory.map((beat, i) => (
                <StoryThreadBeat key={beat.day} index={i}>
                  <Reveal delay={i * 90}>
                    <p className="landing-story-label">{beat.day}</p>
                    <p className="landing-body mt-2">{beat.body}</p>
                  </Reveal>
                </StoryThreadBeat>
              ))}
            </StoryThreadList>
          </div>
        </div>
      </div>
    </Section>
  );
}
