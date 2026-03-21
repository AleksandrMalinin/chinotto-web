import { MACOS_QUICK_CAPTURE } from "./macosShortcuts";

export interface ProductUpdate {
  version: string;
  title?: string;
  date?: string;
  items: string[];
}

/**
 * Keep newest entries first.
 * Adding a release should be a single object inserted at the top.
 *
 * Writing rules: see **Changelog writing (Updates / `/changelog`)** in AGENTS.md.
 */
export const productUpdates: ProductUpdate[] = [
  {
    version: "1.0.0",
    title: "The first complete version",
    items: [
      "A clearer starting point",
      "Search feels more natural",
      "Thoughts come back more reliably",
      "A smoother overall flow",
    ],
  },
  {
    version: "0.2.1",
    title: "In-app updates",
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
    date: "2026-03-16",
    items: [
      "Thought capture",
      "Full-text search",
      "Pin thoughts",
      "Note export",
      "Local-first without accounts",
    ],
  },
];
