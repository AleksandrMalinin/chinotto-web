/** Hairline between narrative acts — structure without glow or decoration. */
export function SectionRule() {
  return (
    <div
      className="mx-auto w-full max-w-[1100px] px-6 py-4 sm:px-8 md:py-6"
      aria-hidden
    >
      <hr className="border-0 border-t border-landing-card-border" />
    </div>
  );
}
