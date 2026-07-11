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
  "A calm pocket for thoughts that aren't finished yet.";
export const heroMobileBody =
  "Capture in a tap. Pick up the thread on desktop.";

export const continuityLead =
  "Chinotto is for thoughts that stop mid-sentence — and for returning to them when the context is still there.";

export const continuityQuestion = "What helps a thought continue?";

export const continuityIntro = [
  "Most software helps you capture, organize, or find a note later.",
  "Continuation is harder:",
] as const;

export const continuityBelief =
  "Ideas often disappear from interruption — not because they lacked meaning, but because you never got back to them.";

export const continuityThreads =
  "You capture without closing the thought. Structure can come later — when you revisit, scroll, follow a trail, or jump to a week on the strand.";

export const problemEyebrow = "A familiar gap";
export const problemContrastLine1 = "The note is still there.";
export const problemContrastLine2 = "The thread isn't.";
export const problemHeading = "Thoughts stop mid-sentence.";
export const problemBody =
  "You had more to say — then something else happened. When you open it again, you don't know what you meant.";

export const resurfacingEyebrow = "When you come back";
export const resurfacingHeading = "The unfinished thought is still there.";
export const resurfacingStory = [
  {
    day: "Day 1",
    body: "\"AI: Skills are needed to tie all the complexity together over time.\" Not a post. Not a conclusion. Worth keeping anyway.",
  },
  {
    day: "Week 3",
    body: "Scrolling past it again — speed, consistency. You've been saying the same thing.",
  },
  {
    day: "Month 2",
    body: "You finally know what you meant.",
  },
  {
    day: "Any time",
    body: "Lit weeks on the strand show where you were thinking. Same entry — more context around it.",
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
    body: "A calm pocket — widget, voice, or share-in when a half-formed thought needs somewhere to land.",
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
    "On mobile, Chinotto is a calm pocket — capture in the moment with widget, voice, or share-in; search or swipe into what came before when you have a minute.",
} as const;

/** Shorter platform copy for the landing — manifesto keeps the long form. */
export const platformLandingRoles = {
  desktop: platformRoles.desktop.body,
  mobile: platformRoles.mobile.body,
} as const;

export const continuityClose =
  "Not a better notes app — a way to pick up unfinished thoughts months later.";

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
  "For thoughts that interrupt you — not items on a calendar.";

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
export const sharingHeading = "Send a read-only link.";
export const sharingBody =
  "Pick connected thoughts from a trail, add one line of context, and send a read-only link that expires. Nothing leaves your device until you choose.";
export const sharingPoints = [
  {
    title: "Read-only",
    body: "A simple hosted page — not a workspace export.",
  },
  {
    title: "Your labels stay local",
    body: "Recall themes never leave your device — use the context note if the reader needs framing.",
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

export const localFirstShareNote =
  "Share a read-only thread when you choose — revoke anytime.";

export const platformVisualCaptions = {
  desktop: "The return",
  mobile: "The pocket",
} as const;

export const ctaHeading = "Try Chinotto";

export const manifestoSyncNote =
  "Your thoughts stay local-first on your devices until you choose otherwise. Sync is optional: Sign in with Apple when you want the same stream on desktop and mobile. On desktop, optional Spaces — Inbox, Work, Personal — filter one timeline when you want separation, without folders or a workspace to set up first. There is no Chinotto account.";
