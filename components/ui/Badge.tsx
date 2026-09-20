type BadgeProps = {
  children: React.ReactNode;
  tone?: "blue" | "red" | "green" | "amber" | "slate";
  className?: string;
};

const tones: Record<NonNullable<BadgeProps["tone"]>, string> = {
  blue: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  red: "bg-red-50 text-red-700 ring-1 ring-red-200",
  green: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  slate: "bg-slate-100 text-slate-700 ring-1 ring-slate-200",
};

export function Badge({ children, tone = "blue", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
