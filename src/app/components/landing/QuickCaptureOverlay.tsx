import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { MACOS_QUICK_CAPTURE } from "../../content/macosShortcuts";

function isCaptureShortcut(event: globalThis.KeyboardEvent) {
  return (
    event.key.toLowerCase() === "k" &&
    event.shiftKey &&
    (event.metaKey || event.ctrlKey)
  );
}

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    target.isContentEditable
  );
}

/** ⌘⇧K demo — type a thought, Enter dismisses. Nothing is stored. */
export function QuickCaptureOverlay() {
  const [open, setOpen] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setSavedFlash(false);
  }, []);

  const openOverlay = useCallback(() => {
    setOpen(true);
    setSavedFlash(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const frame = requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(frame);
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (open) {
        if (event.key === "Escape") {
          event.preventDefault();
          close();
        }
        return;
      }

      if (isEditableTarget(event.target)) return;
      if (!isCaptureShortcut(event)) return;

      event.preventDefault();
      openOverlay();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [close, open, openOverlay]);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const value = inputRef.current?.value.trim() ?? "";
    if (value) {
      setSavedFlash(true);
      window.setTimeout(close, 520);
      return;
    }
    close();
  };

  if (!open) return null;

  return (
    <div
      className="quick-capture-overlay fixed inset-0 z-50 flex items-start justify-center px-6 pt-[min(28vh,12rem)]"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-landing-bg/72 backdrop-blur-[2px]"
        aria-label="Close capture"
        onClick={close}
        data-umami-event="quick-capture-dismiss-backdrop"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-capture-label"
        className="quick-capture-panel relative w-full max-w-md rounded-xl border border-landing-card-border bg-[#12121a] px-5 py-4 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)]"
        data-umami-event="quick-capture-open"
      >
        <p
          id="quick-capture-label"
          className="landing-caption mb-3 text-landing-muted/70"
        >
          Quick capture{" "}
          <span className="tabular-nums text-landing-note-violet/80">
            {MACOS_QUICK_CAPTURE}
          </span>
        </p>

        <form onSubmit={onSubmit}>
          <div className="flex items-center gap-0.5">
            <input
              ref={inputRef}
              type="text"
              name="thought"
              autoComplete="off"
              spellCheck={false}
              placeholder="Capture a thought…"
              className="w-full bg-transparent text-lg font-light text-landing-foreground placeholder:text-landing-muted/45 focus:outline-none"
              data-umami-event="quick-capture-input"
            />
            {!savedFlash ? (
              <span className="placeholder-cursor shrink-0" aria-hidden />
            ) : null}
          </div>
        </form>

        <p
          className="landing-caption mt-4 text-landing-muted/55"
          aria-live="polite"
        >
          {savedFlash ? (
            <span className="text-landing-note-violet/85">Saved locally.</span>
          ) : (
            <>Enter to close · Esc</>
          )}
        </p>
      </div>
    </div>
  );
}
