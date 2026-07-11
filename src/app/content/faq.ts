/** Common questions — separate content page; calm, factual, no pricing on site. */

export const faqPageTitle = "Questions";
export const faqPageDescription =
  "What Chinotto is, what is free, how optional sync works, and how it differs from notes apps and workspaces.";

/** CTA + Not for — quiet links into the questions page. */
export const faqCtaLinkLabel = "Questions about pricing, sync, and accounts";
export const faqNotForLinkLabel = "Questions";

export const faqLinkClassName =
  "text-landing-accent underline decoration-transparent underline-offset-[0.15em] transition-colors hover:text-landing-accent-hover hover:decoration-landing-accent/35";

export const faqItems = [
  {
    question: "What is Chinotto?",
    answer:
      "A local-first thinking app for thoughts you did not finish — jot them down quickly, then come back when you have context. One chronological stream, not folders or a workspace.",
  },
  {
    question: "Is it free? What is paid?",
    answer:
      "On your device, everything is free — writing, editing, searching, trails between related entries, and returning to older thoughts. The only paid part is optional sync across your devices. Subscribe in the Chinotto app when you turn sync on — not on this website — through Apple. Prices and any free trial are shown before you confirm. Sync needs encrypted infrastructure; Chinotto does not sell your thoughts or run ads.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No Chinotto login. Your thoughts stay on your device by default. Sign in with Apple only if you turn on sync, to link the devices you choose. You can stop syncing from the app on each device.",
  },
  {
    question: "How is Chinotto different from Apple Notes?",
    answer:
      "Notes are separate documents in folders. Chinotto is one continuous stream — trails link entries that share words, older thoughts can surface when you return, and you can jump to the weeks when you were thinking about something.",
  },
  {
    question: "How is it different from Notion or Obsidian?",
    answer:
      "Notion is a workspace for structured documents and collaboration. Obsidian is a knowledge base you build with links and plugins. Chinotto stays closer to one inner stream — structure when you want it, not when you first write something down.",
  },
  {
    question: "Can I use it on phone and desktop?",
    answer:
      "Yes — same entries, same order. Mobile is the calm pocket — capture first, but you can search, move between months, and follow trails there too. Desktop is the fuller return: the time strand, Spaces, and sharing a read-only link when you choose. Windows and Android are planned.",
  },
] as const;

export const faqPrivacyLead =
  "For how data is handled — local-first by default, optional sync, analytics — see";
