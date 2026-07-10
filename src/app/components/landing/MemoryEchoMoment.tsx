import { useState } from "react";

/** Demo resurfacing card — mirrors desktop MemoryEcho in home depth zone. */
const DEMO = {
  reason: "From 2 months ago",
  threadHint: "Part of a thread with 4 related thoughts",
  preview: "https://github.com/github/spec-kit",
} as const;

interface MemoryEchoMomentProps {
  visible: boolean;
}

/** Memory Echo — desktop home depth zone; pairs with Time Strand scroll. */
export function MemoryEchoMoment({ visible }: MemoryEchoMomentProps) {
  const [dismissed, setDismissed] = useState(false);

  if (!visible || dismissed) return null;

  return (
    <section className="memory-echo" aria-label="Memory from earlier">
      <p className="memory-echo-meta">
        <span className="memory-echo-meta-reason">{DEMO.reason}</span>
        <span className="memory-echo-meta-sep hidden sm:inline" aria-hidden="true">
          {" "}
          ·{" "}
        </span>
        <span className="memory-echo-meta-thread hidden sm:inline">
          {DEMO.threadHint}
        </span>
      </p>
      <div className="memory-echo-card">
        <div className="memory-echo-body">
          <p className="memory-echo-text">{DEMO.preview}</p>
          <span className="memory-echo-cta">Continue this thought</span>
        </div>
        <button
          type="button"
          className="memory-echo-dismiss"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss memory"
        >
          ×
        </button>
      </div>
    </section>
  );
}
