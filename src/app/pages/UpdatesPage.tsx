import { useState } from "react";
import { ContentPageLayout } from "../components/landing/ContentPageLayout";
import { cn } from "../components/ui/utils";
import { productUpdates } from "../content/updates";

const releaseDateFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

function formatReleaseDate(date: string) {
  return releaseDateFormatter.format(new Date(`${date}T00:00:00`));
}

export function NotesPage() {
  const [openVersion, setOpenVersion] = useState<string | null>(
    productUpdates[0]?.version ?? null,
  );

  const toggleVersion = (version: string) => {
    setOpenVersion((current) => (current === version ? null : version));
  };

  return (
    <ContentPageLayout title="Notes">
      <div className="mx-auto max-w-2xl">
        <p className="mb-12 text-sm font-light tracking-[0.02em] text-landing-muted/90">
          Chinotto is slowly taking shape.
        </p>

        <ol className="m-0 list-none p-0">
          {productUpdates.map((update, index) => {
            const isOpen = openVersion === update.version;

            return (
              <li key={update.version} className="pt-7 first:pt-0">
                {index > 0 && (
                  <div className="mb-7 h-px w-full bg-landing-border-subtle" />
                )}

                <div
                  className={cn(
                    "notes-release-shell group -mx-3",
                    isOpen
                      ? "notes-release-shell--expanded"
                      : "notes-release-shell--collapsed",
                  )}
                >
                  {isOpen && (
                    <>
                      <div
                        className="notes-release-outline notes-release-outline--furthest"
                        aria-hidden
                      />
                      <div
                        className="notes-release-outline notes-release-outline--mid"
                        aria-hidden
                      />
                    </>
                  )}
                  <div
                    className={cn(
                      "px-3",
                      isOpen
                        ? "notes-release-body notes-release-body--expanded py-3.5"
                        : "notes-release-body notes-release-body--collapsed py-2",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => toggleVersion(update.version)}
                      className="w-full rounded-md text-left transition-opacity duration-[130ms] ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-landing-border/45 focus-visible:ring-offset-2 focus-visible:ring-offset-landing-bg"
                      aria-expanded={isOpen}
                      aria-controls={`release-${update.version}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <header className="min-w-0 space-y-1">
                          <p className="text-sm font-normal tabular-nums tracking-tight text-landing-foreground/72">
                            {`v${update.version}`}
                          </p>
                          {update.title && (
                            <p className="text-lg font-medium leading-tight tracking-tight text-landing-foreground/92">
                              {update.title}
                            </p>
                          )}
                          {update.date && (
                            <p
                              className={cn(
                                "text-[0.6875rem] font-light tracking-wide text-landing-muted/55 transition-colors duration-[130ms]",
                                !isOpen && "group-hover:text-landing-muted/68",
                              )}
                            >
                              {formatReleaseDate(update.date)}
                            </p>
                          )}
                        </header>
                        <span
                          className={cn(
                            "shrink-0 pt-1 text-sm text-landing-muted/38 transition-opacity duration-[130ms] ease-out",
                            "group-hover:text-landing-muted/52",
                          )}
                          aria-hidden="true"
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </div>
                    </button>

                    <div
                      id={`release-${update.version}`}
                      className="grid transition-[grid-template-rows,opacity] duration-[130ms] ease-out"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                      }}
                      aria-hidden={!isOpen}
                    >
                      <div className="overflow-hidden">
                        <ul className="mb-0 mt-3 list-disc space-y-2 pl-5 text-[0.9375rem] font-normal leading-relaxed text-landing-foreground/65 [&_li::marker]:text-landing-foreground/35">
                          {update.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </ContentPageLayout>
  );
}
