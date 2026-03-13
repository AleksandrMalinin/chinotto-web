import { ChinottoLogo } from "../ChinottoLogo";

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 2v10" />
      <path d="M12 12l-4 10" />
      <path d="M12 12l4 10" />
      <circle cx="12" cy="2" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const PINNED_ITEMS = [
  { text: "Prepare an RFC about account creation ownership", time: "13:17" },
  { text: "Think about LLM for chinotto", time: "04:59" },
];

const TODAY_ITEMS = [
  { text: "Review team's PRs", time: "22:01", pinned: true },
  { text: "Schedule a call with CX team", time: "22:01", pinned: false },
  { text: "Build a marketing site", time: null, pinned: false },
];

export function AppMockup() {
  return (
    <section className="py-16 px-8 flex justify-center" aria-hidden>
      <div
        className="w-full max-w-xl rounded-xl overflow-hidden shadow-2xl border border-landing-border-subtle"
        style={{ backgroundColor: "var(--landing-border-subtle)" }}
      >
        {/* Window title bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-sm font-medium text-landing-muted ml-2">
            Chinotto
          </span>
        </div>

        {/* Input row */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
          <div className="flex-shrink-0">
            <ChinottoLogo size={36} className="text-landing-accent" />
          </div>
          <div className="flex-1 min-w-0 flex items-center justify-between gap-2 py-2 px-3 rounded-lg bg-landing-bg/60 border border-white/5">
            <span className="text-sm text-landing-muted truncate">
              Type a thought and press Enter...
            </span>
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-xs font-mono text-landing-border border border-white/10 bg-white/5">
              ⌘K
            </kbd>
          </div>
          <span className="hidden sm:inline text-xs text-landing-border whitespace-nowrap">
            Preview resurface
          </span>
        </div>

        {/* List content */}
        <div className="px-4 py-5 space-y-6">
          {/* Pinned */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-landing-border mb-3">
              Pinned
            </h3>
            <ul className="space-y-2">
              {PINNED_ITEMS.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-2 py-2 px-3 -mx-1 rounded-lg bg-white/[0.03]"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-landing-foreground-strong">
                      {item.text}
                    </p>
                    <p className="text-xs text-landing-border mt-0.5">
                      {item.time}
                    </p>
                  </div>
                  <PinIcon className="text-landing-muted flex-shrink-0 mt-1" />
                </li>
              ))}
            </ul>
          </div>

          {/* Today */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-wider text-landing-border mb-3">
              Today
            </h3>
            <ul className="space-y-2">
              {TODAY_ITEMS.map((item) => (
                <li
                  key={item.text}
                  className={`flex items-start gap-2 py-2 px-3 -mx-1 rounded-lg ${item.pinned ? "bg-white/[0.03]" : ""}`}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-landing-foreground-strong">
                      {item.text}
                    </p>
                    {item.time && (
                      <p className="text-xs text-landing-border mt-0.5">
                        {item.time}
                      </p>
                    )}
                  </div>
                  {item.pinned && (
                    <PinIcon className="text-landing-muted flex-shrink-0 mt-1" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
