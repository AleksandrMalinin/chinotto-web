/** Shared continuity / platform positioning — landing section + manifesto. */

export const siteTitle = "Chinotto — personal thought that keeps going";
export const siteDescription =
  "Capture unfinished thoughts. Pick the thread back up later — local-first, no account.";

export const heroSloganLine1 = "Capture first.";
export const heroSloganLine2 = "Continue later.";
export const heroSubhead =
  "Thoughts you didn't finish — picked up where you left off.";
export const heroBody = "No folders. No ceremony.";

/** Mobile landing — pocket-first hero lines. */
export const heroMobileSubhead =
  "A pocket for thoughts that aren't finished yet.";
export const heroMobileBody =
  "Capture in a tap. Pick up the thread on desktop.";

export const continuityLead =
  "Chinotto is for thoughts that stop mid-sentence — and for returning to them when more has gathered around them.";

export const continuityQuestion = "How do you pick up where you left off?";

export const continuityIntro = [
  "Most notes apps help you capture, organize, or find a note later.",
  "Returning to an unfinished thought — with more around it — is rarer:",
] as const;

export const continuityBelief =
  "Most notes apps keep the file. Chinotto keeps the return — the same line, later, with more weight.";

export const continuityThreads =
  "You capture without closing the thought. Structure can wait until you come back — scroll the stream, follow a trail, or jump a week on the strand.";

export const problemEyebrow = "A familiar gap";
export const problemContrastLine1 = "The note is still there.";
export const problemContrastLine2 = "The thread isn't.";
export const problemHeading = "Thoughts stop mid-sentence.";
export const problemBody =
  "You save it in a second. Later you still have the note — but not a thread that kept going around it.";

export const resurfacingDemoThought =
  "AI: Skills are needed to tie all the complexity together over time.";

export const resurfacingEyebrow = "When you come back";
export const resurfacingHeading = "The unfinished thought is still there.";
export const resurfacingStory = [
  {
    day: "Day 1",
    body: "Not finished. Just something you didn't want to lose.",
  },
  {
    day: "Week 3",
    body: "You keep scrolling past it. Same half-thought, still open.",
  },
  {
    day: "Month 2",
    body: "More sits around it now. The thought carries more weight.",
  },
  {
    day: "Any time",
    body: "Lit weeks mark when you were in it. The thought is still there — with more around it.",
  },
] as const;

export const captureEyebrow = "Capture";
export const captureHeading = "Quick capture, anywhere.";
export const capturePoints = [
  {
    title: "Desktop",
    body: "Quick capture from anywhere — no title, no folder, no decision.",
  },
  {
    title: "Mobile",
    body: "One tap or widget — Chinotto opens ready to capture.",
  },
  {
    title: "One stream",
    body: "One continuous stream — not documents or folders.",
  },
] as const;

export const platformRoles = {
  desktop: {
    title: "Desktop",
    body: "Where you return to continue a thread, scan older context, and jump weeks on the strand.",
  },
  mobile: {
    title: "Mobile",
    body: "The pocket — widget, voice, or share-in when a thought shows up and you need somewhere for it.",
  },
} as const;

export const desktopPlatformExtras = [
  "Time strand — jump through weeks on one stream",
  "Share a read-only thread when you choose",
] as const;

export const mobilePlatformExtras = [
  "Voice capture and share-in from apps",
  "Pull the stream down to search",
  "Swipe right on a dotted thought for a related entry",
] as const;

/** Longer platform copy — manifesto only. */
export const manifestoPlatformRoles = {
  desktop:
    "On desktop, you continue threads — reopen unfinished entries, follow trails, use the time strand to jump across months, and share a read-only link when you want someone else to read along.",
  mobile:
    "On mobile, Chinotto is the pocket — capture with widget, voice, or share-in; search or swipe into what came before when you have a minute.",
} as const;

/** Shorter platform copy for the landing — manifesto keeps the long form. */
export const platformLandingRoles = {
  desktop: platformRoles.desktop.body,
  mobile: platformRoles.mobile.body,
} as const;

export const continuityClose =
  "Not another notes app. A place to pick up unfinished thoughts months later.";

export const platformsEyebrow = "Desktop & mobile";
export const platformsHeadingLine1 = "Two roles.";
export const platformsHeadingLine2 = "One timeline.";
export const platformsIntro =
  "Capture on mobile. Continue on desktop. Same entries, same order.";

export const notForLines = [
  "Not a notes app.",
  "Not a workspace.",
  "Not a task manager.",
] as const;

export const notForBody =
  "For unfinished thoughts — not calendar items.";

export const localFirstHeadingLine1 = "Your thoughts stay";
export const localFirstHeadingLine2 = "on your device.";

export const optionalSyncBody =
  "Optional sync across your devices. No Chinotto account.";

/** Mobile landing sections — pocket-first narrative. */
export const mobileCaptureEyebrow = "The pocket";
export const mobileCaptureHeading = "One tap to capture.";
export const mobileCaptureIntro =
  "Widget or app — the pocket is always one tap away.";

export const mobileResurfacingAnyTimeBeat =
  "Pull the stream back to a month, or swipe right on a dotted thought — the earlier entry is still there.";

export const mobileResurfacingStory = [
  resurfacingStory[0]!,
  resurfacingStory[1]!,
  resurfacingStory[2]!,
  { day: "Any time", body: mobileResurfacingAnyTimeBeat },
] as const;

export const mobileTrailsEyebrow = "Trails";
export const mobileTrailsHeading = "Related entries, without tags.";
export const mobileTrailsBody =
  "Entries that share words get linked — swipe right on a dotted thought for the one before it.";

export const mobileBridgeEyebrow = "The return";
export const mobileBridgeHeading = "Continue on desktop.";
export const mobileBridgeBody =
  "Same stream at your desk — time strand, trails, and share when you choose.";
export const mobileBridgeNote = optionalSyncBody;

export const desktopSpacesNote =
  "On desktop, optional Spaces — Inbox, Work, Personal — filter one timeline when you want separation, without folders.";

export const sharingEyebrow = "Share a thread";
export const sharingHeading = "Send the trail, not the whole stream.";
export const sharingBody =
  "A thread can span weeks. Pick the entries that matter, add one line of context, and send a read-only link — your full stream stays private.";
export const sharingPoints = [
  {
    title: "Read-only",
    body: "They see what you chose — not your inbox or a shared workspace.",
  },
  {
    title: "Your labels stay local",
    body: "Recall themes never leave your device — use the context note if needed.",
  },
  {
    title: "Revoke anytime",
    body: "Links expire on your schedule. Delete the share when you're done.",
  },
] as const;

export const connectedEyebrow = "Trails & recall";
export const connectedHeading = "Related entries, without tags.";

export const trailsFeature = {
  title: "Trails",
  body: "Entries that share words get linked. On mobile, swipe right on a dotted thought; on desktop, follow neighbors in the stream.",
} as const;

export const recallFeature = {
  title: "Recall labels",
  body: "Name up to seven personal themes. Assign in entry detail; URLs become Links automatically. Add structure when you want it — not at capture.",
} as const;

export const spacesFeature = {
  title: "Spaces",
  body: "On desktop, optional lenses — Inbox, Work, Personal — filter one timeline when you want separation, without folders.",
} as const;

export const localFirstYoursByDefaultBody =
  "Thoughts live on your device. Sync and share are optional — both stay off until you turn them on.";

export const localFirstShareNote =
  "Share a read-only thread when you choose — revoke anytime.";

export const platformVisualCaptions = {
  desktop: "The return",
  mobile: "The pocket",
} as const;

export const ctaHeading = "Try Chinotto";

export const manifestoSyncNote =
  "Your thoughts stay local-first on your devices until you choose otherwise. Sync is optional: Sign in with Apple when you want the same stream on desktop and mobile. On desktop, optional Spaces — Inbox, Work, Personal — filter one timeline when you want separation, without folders or a workspace to set up first. There is no Chinotto account.";
