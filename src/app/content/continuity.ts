/** Shared continuity / platform positioning — landing section + manifesto. */

export const siteTitle = "Chinotto — personal thought that keeps going";
export const siteDescription =
  "Capture unfinished thoughts. Pick the thread back up later — local-first, no account.";

export const heroSloganLine1 = "Capture first.";
export const heroSloganLine2 = "Continue later.";
export const heroSubhead =
  "Personal thought across your devices — one stream across time.";
export const heroBody = "No folders. No ceremony.";

/** Mobile landing — pocket-first hero lines. */
export const heroMobileSubhead =
  "A calm pocket for thoughts that aren't finished yet.";
export const heroMobileBody =
  "Capture in a tap. One stream with Mac.";

export const continuityLead =
  "Chinotto helps unfinished personal thought pick up where it left off — across desktop and mobile.";

export const continuityQuestion = "What helps thoughts continue?";

export const continuityIntro = [
  "Most software helps us capture thoughts, organize them, or retrieve them later.",
  "We are interested in a different question:",
] as const;

export const continuityBelief =
  "Many valuable ideas disappear not because they lack meaning, but because modern life constantly interrupts them before they have time to evolve.";

export const continuityThreads =
  "Chinotto is built around the idea that thoughts are not files to be stored. They are ongoing threads that unfold across time.";

export const problemEyebrow = "A familiar gap";
export const problemContrastLine1 = "The note is still there.";
export const problemContrastLine2 = "The thread isn't.";
export const problemHeading = "Thoughts stop mid-sentence.";
export const problemBody =
  "You had more to say — then something else happened. When you open it again, you don't know what you meant.";

export const resurfacingEyebrow = "When you come back";
export const resurfacingHeading = "What you didn't finish can come back.";
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
    body: "Jump to a lit week on desktop, or scrub months on iPhone — the same thread, navigable when you return.",
  },
] as const;

export const captureEyebrow = "Capture";
export const captureHeading = "Capture first. No ceremony.";
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
    body: "Everything lands in one chronological flow you can scan.",
  },
] as const;

export const platformRoles = {
  desktop: {
    title: "Desktop",
    body: "Where you return to continue a thread, revisit older context, and notice what connects over time.",
  },
  mobile: {
    title: "Mobile",
    body: "A calm pocket for thoughts that aren't finished yet — reflections and half-formed ideas you need to set down before they disappear.",
  },
} as const;

export const desktopPlatformExtras = [
  "Time strand — jump through weeks on one stream",
  "Share a read-only thread when you choose",
] as const;

export const mobilePlatformExtras = [
  "Voice capture and share-in from Safari",
  "Pull the stream down to search",
  "Swipe right on a dotted thought for a related entry",
] as const;

/** Longer platform copy — manifesto only. */
export const manifestoPlatformRoles = {
  desktop:
    "On desktop, Chinotto becomes a space for continuing those threads — exploring unfinished ideas, reconnecting with earlier contexts, and maintaining continuity across months or years.",
  mobile:
    "On mobile, Chinotto becomes a calm mental pocket you carry with you — a quieter space where thoughts can be captured in the moment, gently resurfaced later, and continued when the time feels right.",
} as const;

/** Shorter platform copy for the landing — manifesto keeps the long form. */
export const platformLandingRoles = {
  desktop: platformRoles.desktop.body,
  mobile: platformRoles.mobile.body,
} as const;

export const continuityClose =
  "The goal is not to build a better notes app. The goal is to help thoughts survive fragmentation and continue over time.";

export const platformsEyebrow = "Desktop & mobile";
export const platformsHeadingLine1 = "Two roles.";
export const platformsHeadingLine2 = "One stream.";
export const platformsIntro =
  "Capture and continuation are different moments in the life of a thought — same stream, wherever you are.";

export const notForLines = [
  "Not a notes app.",
  "Not a workspace.",
  "Not a task manager.",
] as const;

export const notForBody =
  "For the inner conversation — the one that gets interrupted, not scheduled.";

export const localFirstHeadingLine1 = "Local-first isn't a feature.";
export const localFirstHeadingLine2 = "It's the whole point.";

export const optionalSyncBody =
  "Optional sync keeps one stream across your devices. No Chinotto account.";

/** Mobile landing sections — iPhone-first narrative. */
export const mobileCaptureEyebrow = "The pocket";
export const mobileCaptureHeading = "Capture before it disappears.";
export const mobileCaptureIntro = platformRoles.mobile.body;

export const mobileResurfacingAnyTimeBeat =
  "Scrub months on the stream, or swipe a dotted thought for what came before — the thread is there when you return.";

export const mobileResurfacingStory = [
  resurfacingStory[0]!,
  resurfacingStory[1]!,
  resurfacingStory[2]!,
  { day: "Any time", body: mobileResurfacingAnyTimeBeat },
] as const;

export const mobileTrailsEyebrow = "Trails";
export const mobileTrailsHeading = "Thoughts find each other.";
export const mobileTrailsBody =
  "Chinotto links entries that share language — swipe right on a dotted thought for a related one. No tags, no folders.";

export const mobileBridgeEyebrow = "The return";
export const mobileBridgeHeading = "Continue on Mac.";
export const mobileBridgeBody =
  "Same stream when you're back at your desk — time strand, trails, and share when you choose.";
export const mobileBridgeNote = optionalSyncBody;

export const desktopSpacesNote =
  "On desktop, optional Spaces — Inbox, Work, Personal — filter one timeline when you want separation, without folders.";

export const sharingEyebrow = "Share a thread";
export const sharingHeading = "Share a thread, not a document.";
export const sharingBody =
  "Pick connected thoughts from a trail, add one line of context, and send a read-only link that expires. Nothing leaves your device until you choose.";
export const sharingPoints = [
  {
    title: "Read-only",
    body: "A private editorial page — not a workspace export.",
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
export const sharingPlatformNote = "Desktop — hosted at getchinotto.app";

export const connectedEyebrow = "Trails & recall";
export const connectedHeading = "It connects your thinking for you.";

export const trailsFeature = {
  title: "Trails",
  body: "Chinotto links thoughts that share language and surfaces neighbors you&rsquo;d miss — no tagging, no manual linking.",
} as const;

export const recallFeature = {
  title: "Recall labels",
  body: "Name up to seven personal themes. Assign in entry detail; URLs become Links automatically. Structure when you&rsquo;re ready — not when you capture.",
} as const;

export const spacesFeature = {
  title: "Spaces",
  body: "On desktop, optional lenses — Inbox, Work, Personal — separate threads without folders. One timeline, filtered when you want it.",
} as const;

export const localFirstShareNote =
  "Share a read-only thread when you choose — revoke anytime.";

export const platformVisualCaptions = {
  desktop: "The return",
  mobile: "The pocket",
} as const;

export const ctaHeading = "Get Chinotto";

export const manifestoSyncNote =
  "Your thoughts stay local-first on your devices until you choose otherwise. Sync is optional: Sign in with Apple when you want the same stream on desktop and mobile. On desktop, optional Spaces — Inbox, Work, Personal — filter one timeline when you want separation, without folders or a workspace to set up first. There is no Chinotto account.";
