type BrandMarkProps = {
  className?: string;
  showWordmark?: boolean;
  compact?: boolean;
};

export function BrandMark({ className = "", showWordmark = true, compact = false }: BrandMarkProps) {
  const logo = "/nss-logo.png";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={[
          "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/90 shadow-sm",
          compact ? "h-12 w-12" : "h-14 w-14 sm:h-16 sm:w-16",
        ].join(" ")}
      >
        <img src={logo} alt="NSS logo" className="h-full w-full object-contain p-1" />
      </div>

      {showWordmark ? (
        <div className="leading-none">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--nss-red)]">PGGC-46</div>
          <div className="mt-1 text-sm font-black tracking-tight text-slate-900 sm:text-base">NSS Wing</div>
        </div>
      ) : null}
    </div>
  );
}
