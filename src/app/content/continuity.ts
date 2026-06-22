/** Shared continuity / platform positioning — landing section + manifesto. */

export const siteTitle = "Chinotto — A continuity system for personal thought";
export const siteDescription =
  "Chinotto helps thoughts survive fragmentation and resurface across time — a local-first continuity system for desktop and mobile.";

export const heroSloganLine1 = "Capture first.";
export const heroSloganLine2 = "Revisit later.";
export const heroSubhead =
  "Chinotto is a continuity system for personal thought.";
export const heroBody = "No folders. No ceremony.";

export const continuityLead = heroSubhead;

export const continuityQuestion = "What helps thoughts continue?";

export const continuityIntro = [
  "Most software helps us capture thoughts, organize them, or retrieve them later.",
  "We are interested in a different question:",
] as const;

export const continuityBelief =
  "Many valuable ideas disappear not because they lack meaning, but because modern life constantly interrupts them before they have time to evolve.";

export const continuityThreads =
  "Chinotto is built around the idea that thoughts are not files to be stored. They are ongoing threads that unfold across time.";

export const platformRoles = {
  desktop: {
    title: "Desktop",
    body: "Where threads continue — search, trails, months of context.",
  },
  mobile: {
    title: "Mobile",
    body: "Where thoughts land in the moment — capture, revisit later.",
  },
} as const;

/** Longer platform copy — manifesto only. */
export const manifestoPlatformRoles = {
  desktop:
    "On desktop, Chinotto becomes a space for continuing those threads — exploring unfinished ideas, reconnecting with earlier contexts, and maintaining continuity across months or years.",
  mobile:
    "On mobile, Chinotto becomes a calm mental pocket you carry with you — a quieter space where thoughts can be captured in the moment, gently resurfaced later, and continued when the time feels right.",
} as const;

export const continuityClose =
  "The goal is not to build a better notes app. The goal is to help thoughts survive fragmentation and continue over time.";

export const platformsEyebrow = "Desktop & mobile";
export const platformsHeading = "Two roles. One stream.";

export const optionalSyncBody =
  "Optional sync keeps one stream across desktop and mobile — continuing threads on the big screen, capture in the moment on the go.";

export const platformVisualCaptions = {
  desktop: "Continue threads",
  mobile: "Capture in the moment",
} as const;

export const manifestoSyncNote =
  "Your thoughts stay local-first on your devices until you choose otherwise. Sync is optional: Sign in with Apple when you want the same stream on desktop and mobile. On desktop, optional Spaces — Inbox, Work, Personal — filter one timeline when you want separation, without folders or a workspace to set up first. There is no Chinotto account.";
