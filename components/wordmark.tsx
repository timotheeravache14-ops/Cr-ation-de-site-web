/**
 * Typographic recreation of the Chez Tuyet wordmark: "CHEZ" in a rounded bold
 * display face, "Tuyet" in a brush script, with the signature orange dot.
 */
export function Wordmark({
  className,
  variant = "dark",
}: {
  className?: string
  variant?: "dark" | "light"
}) {
  const textColor = variant === "light" ? "text-white" : "text-jade-deep"

  return (
    <span className={`relative inline-flex select-none flex-col items-start leading-[0.82] ${className ?? ""}`}>
      <span className="flex items-start gap-[0.18em]">
        <span className="mt-[0.18em] block h-[0.28em] w-[0.28em] rounded-full bg-orange" aria-hidden="true" />
        <span className={`font-display text-[1em] font-extrabold uppercase tracking-tight ${textColor}`}>
          Chez
        </span>
      </span>
      <span className={`script ml-[0.5em] -mt-[0.15em] text-[0.92em] ${textColor}`}>
        Tuyet
      </span>
    </span>
  )
}
