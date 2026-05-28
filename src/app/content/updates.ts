import { MACOS_QUICK_CAPTURE } from "./macosShortcuts";
import { CHINOTTO_IOS_APP_STORE_URL } from "./links";

export interface ProductUpdate {
  version: string;
  title?: string;
  date?: string;
  items: string[];
  /** Optional one-line aside, shown below bullets with separate styling (e.g. version requirements). */
  note?: string;
  /** Optional outbound link after `note` (e.g. “App Store” — avoids raw URLs in copy). */
  noteLink?: { label: string; href: string };
  /** Short kicker above the version for major platform / ideological milestones. */
  milestone?: string;
}

/**
 * Keep newest entries first.
 * Adding a release should be a single object inserted at the top.
 *
 * Writing rules: see **Changelog writing (Updates / `/changelog`)** in AGENTS.md.
 */
export const productUpdates: ProductUpdate[] = [
  {
    version: "2.2.1",
    milestone: "Patch — Related thoughts improvements",
    title: "Related thoughts improvements",
    date: "2026-05-28",
    items: [
      "Older thoughts now appear in related trails",
      "Related thoughts indexing happens automatically",
      "Delete confirmation before removing a thought",
      "UI zoom is now supported and remembered",
    ],
  },
  {
    version: "2.1.1",
    milestone: "Patch — Sync improvements",
    title: "Sync improvements",
    date: "2026-05-23",
    items: [
      "More reliable device sync",
      "Desktop thoughts now upload on first sign-in",
      "Improved Continue with Apple flow on Mac",
      "Clearer sync error messages",
    ],
  },
  {
    version: "2.1.0",
    milestone: "Mac release — Spaces",
    title: "Spaces on Mac",
    date: "2026-05-18",
    items: [
      "Capture into current space",
      "Move between spaces",
      "Per-space ambience",
    ],
    note: "iPhone stays one continuous stream.",
  },
  {
    version: "2.0.0",
    milestone: "Major release — Device sync",
    title: "Sync across Mac and iPhone",
    date: "2026-05-04",
    items: [
      "Optional sync — Mac and iPhone",
      "Local-first by default",
    ],
    note: "Chinotto for iPhone on the",
    noteLink: {
      label: "App Store",
      href: CHINOTTO_IOS_APP_STORE_URL.trim(),
    },
  },
  {
    version: "1.3.1",
    title: "Capture stays available",
    date: "2026-04-18",
    items: ["Runs when closed", "Thoughts read better"],
  },
  {
    version: "1.3.0",
    title: "A thought can keep going",
    date: "2026-04-16",
    items: [
      "Continue writing in detail",
      "Save as you go",
      "Cleaner stream",
    ],
  },
  {
    version: "1.2.0",
    title: "Returning got easier",
    date: "2026-03-27",
    items: [
      "Jump to a date — and back",
      "Thoughts grouped by day",
      "More reliable menu bar capture",
    ],
  },
  {
    version: "1.1.0",
    title: "Capture got faster",
    date: "2026-03-24",
    items: [
      "Quick capture from the menu bar",
      "A lighter, single-line input",
      "Jump into the app when needed",
    ],
  },
  {
    version: "1.0.0",
    title: "The first complete version",
    date: "2026-03-21",
    items: [
      "A clearer starting point",
      "Search feels more natural",
      "Thoughts come back more reliably",
      "A smoother overall flow",
    ],
    note:
      "In-app updates require v0.2.1 or later — upgrade once if you’re still on a lower version.",
  },
  {
    version: "0.2.1",
    title: "In-app updates",
    date: "2026-03-20",
    items: [
      "Manual upgrade from v0.2.0",
      "Future updates from inside Chinotto",
    ],
  },
  {
    version: "0.2.0",
    title: "Quick capture is here",
    date: "2026-03-19",
    items: [
      `Quick capture (${MACOS_QUICK_CAPTURE})`,
      "Feedback sharing",
      "Editing improvements",
      "UI polish",
    ],
  },
  {
    version: "0.1.0",
    title: "Chinotto is live",
    date: "2026-03-17",
    items: [
      "Thought capture",
      "Full-text search",
      "Pin thoughts",
      "Note export",
      "Local-first without accounts",
    ],
  },
];
