type StatCardProps = {
  label: string;
  value: string;
  accent?: "emerald" | "blue" | "amber" | "purple";
  hint?: string;
};

const accentClasses: Record<NonNullable<StatCardProps["accent"]>, string> = {
  emerald: "text-emerald-300",
  blue: "text-sky-300",
  amber: "text-amber-300",
  purple: "text-violet-300",
};

export function StatCard({ label, value, accent = "emerald", hint }: StatCardProps) {
  return (
    <div className="card">
      <div className="text-sm text-slate-400">{label}</div>
      <div className={`mt-3 text-3xl font-black ${accentClasses[accent]}`}>{value}</div>
      {hint ? <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{hint}</div> : null}
    </div>
  );
}
