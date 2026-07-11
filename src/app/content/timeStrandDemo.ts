/** Demo strand for landing — mirrors desktop week buckets and resurfacing story beats. */

export type LandingStrandWeek = {
  weekStartYmd: string;
  label: string;
  count: number;
};

export const LANDING_STRAND_WEEKS: LandingStrandWeek[] = [
  { weekStartYmd: "2025-10-06", label: "Oct", count: 0 },
  { weekStartYmd: "2025-10-13", label: "Oct 13", count: 0 },
  { weekStartYmd: "2025-10-20", label: "Oct 20", count: 3 },
  { weekStartYmd: "2025-10-27", label: "Oct 27", count: 0 },
  { weekStartYmd: "2025-11-03", label: "Nov", count: 1 },
  { weekStartYmd: "2025-11-10", label: "Nov 10", count: 4 },
  { weekStartYmd: "2025-11-17", label: "Nov 17", count: 0 },
  { weekStartYmd: "2025-11-24", label: "Nov 24", count: 0 },
  { weekStartYmd: "2025-12-01", label: "Dec", count: 2 },
  { weekStartYmd: "2025-12-08", label: "Dec 8", count: 0 },
  { weekStartYmd: "2025-12-15", label: "Dec 15", count: 1 },
  { weekStartYmd: "2026-03-03", label: "This week", count: 2 },
];

/** Story beat index → lit week on the strand (Day 1, Week 3, Month 2, Any time). */
export const STORY_BEAT_WEEK_INDEX = [2, 5, 8, 11] as const;

export function beatIndexForWeek(weekIndex: number): number | null {
  const beat = STORY_BEAT_WEEK_INDEX.indexOf(
    weekIndex as (typeof STORY_BEAT_WEEK_INDEX)[number],
  );
  return beat >= 0 ? beat : null;
}
