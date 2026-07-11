import { useRef, useState } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { StoryThreadBeat, StoryThreadList } from "./StoryThreadList";
import { TimeStrandRiver } from "./TimeStrandRiver";
import {
  mobileResurfacingStory,
  resurfacingEyebrow,
  resurfacingHeading,
} from "../../content/continuity";

/** Resurfacing on mobile — heading, Time Strand, then story beats. */
export function MobileResurfacingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeBeat, setActiveBeat] = useState(0);
  const [riverBeat, setRiverBeat] = useState(0);

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
    <Section id="resurfacing" className="!py-12">
      <div ref={sectionRef} className="mx-auto w-full max-w-[22rem] px-1">
        <Reveal className="text-center">
          <p className="landing-eyebrow">{resurfacingEyebrow}</p>
          <h2 className="landing-heading mt-3">{resurfacingHeading}</h2>
        </Reveal>

        <Reveal className="mt-8">
          <div className="landing-depth-zone">
            <TimeStrandRiver
              activeBeatIndex={riverBeat}
              onStoryWeekSelect={scrollToBeat}
            />
          </div>
        </Reveal>

        <StoryThreadList
          className="story-thread mt-8"
          onActiveChange={setActiveBeat}
          onRiverBeatChange={setRiverBeat}
        >
          {mobileResurfacingStory.map((beat, i) => (
            <StoryThreadBeat key={beat.day} index={i}>
              <Reveal delay={i * 70}>
                <p className="landing-story-label">{beat.day}</p>
                <p className="landing-body mt-2">{beat.body}</p>
              </Reveal>
            </StoryThreadBeat>
          ))}
        </StoryThreadList>
      </div>
    </Section>
  );
}
