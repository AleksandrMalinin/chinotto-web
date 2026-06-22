import { cn } from "../ui/utils";

interface BogartLabsSignatureProps {
  className?: string;
  /** Floating mark at page bottom (mobile content pages). */
  variant?: "floating" | "inline";
}

/** Quiet studio mark — matches Chinotto desktop / mobile settings. */
export function BogartLabsSignature({
  className,
  variant = "inline",
}: BogartLabsSignatureProps) {
  return (
    <div
      className={cn(
        "bogart-labs-signature",
        variant === "floating" && "app-studio-signature",
        variant === "inline" && "text-center",
        className,
      )}
      aria-hidden="true"
    >
      Bogart Labs
    </div>
  );
}
