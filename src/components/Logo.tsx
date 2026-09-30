/**
 * Vector redraw of the client's digital business card mark, corrected from
 * "VMK" to "MVK" per the client's instruction (his card had a typo), then
 * restyled to match the approved Figma design (dark badge icon + serif
 * wordmark) instead of the original card's raw gold house glyph.
 */
export default function Logo({
  variant = "horizontal",
  tagline,
  className = "",
}: {
  variant?: "horizontal" | "stacked" | "icon";
  tagline?: string;
  className?: string;
}) {
  const icon = (
    <svg viewBox="0 0 40 40" className="h-full w-auto" aria-hidden="true">
      <defs>
        <linearGradient id="mvk-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d9b876" />
          <stop offset="100%" stopColor="#8f7231" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="9" fill="#1c1815" />
      <path d="M20 10 L30 18.5 L27 18.5 L20 12.8 L13 18.5 L10 18.5 Z" fill="url(#mvk-gold)" />
      <path d="M20 12.8 L27 18.5 L27 27 L13 27 L13 18.5 Z" fill="none" stroke="url(#mvk-gold)" strokeWidth="1.4" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={16.5 + i * 3} y={21} width={1.8} height={4} fill="url(#mvk-gold)" />
      ))}
    </svg>
  );

  const wordmark = (
    <span className="font-display font-semibold tracking-wide whitespace-nowrap">
      MVK <span className="font-normal">Housing</span>
    </span>
  );

  if (variant === "icon") {
    return <span className={`inline-block h-10 w-10 ${className}`}>{icon}</span>;
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <span className="h-14 w-14">{icon}</span>
        <span className="text-xl">{wordmark}</span>
        {tagline && (
          <span className="text-[10px] tracking-[0.35em] uppercase text-gold">{tagline}</span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="h-9 w-9 shrink-0">{icon}</span>
      <span className="flex flex-col leading-none">
        <span className="text-lg">{wordmark}</span>
        {tagline && (
          <span className="text-[9px] tracking-[0.3em] uppercase text-gold/90 mt-1">
            {tagline}
          </span>
        )}
      </span>
    </div>
  );
}
