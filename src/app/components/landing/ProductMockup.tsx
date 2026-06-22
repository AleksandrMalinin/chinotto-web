import { MobileMockupPair } from "./MobileDeviceMockup";

const mockupStageClass =
  "rounded-[1.75rem] border border-landing-card-border bg-gradient-to-b from-[color-mix(in_srgb,var(--landing-bg)_93%,rgb(100,118,172)_7%)] via-[color-mix(in_srgb,var(--landing-bg)_97%,rgb(82,96,148)_3%)] to-transparent px-4 py-8 shadow-[inset_0_1px_0_0_rgba(139,148,200,0.035)] sm:px-6 sm:py-10 lg:px-5 lg:pb-14 lg:pt-11";

/** Two iPhone frames in a quiet stage — mobile screenshots only. */
export function ProductMockupVisuals({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-visible ${className}`.trim()}>
      <div
        className={`relative mx-auto w-full max-w-[920px] ${mockupStageClass}`}
      >
        <div className="flex justify-center px-2">
          <MobileMockupPair />
        </div>
      </div>
    </div>
  );
}
