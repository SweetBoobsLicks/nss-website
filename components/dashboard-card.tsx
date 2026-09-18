export function DashboardCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className={`mt-2 text-3xl font-bold ${accent ?? "text-white"}`}>{value}</h3>
    </div>
  );
}
