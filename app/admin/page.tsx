import { DashboardShell } from "@/app/dashboard-shell";
import { getPortalDashboardData } from "@/lib/portal-data";

export default async function AdminPage() {
  const data = await getPortalDashboardData("ADMIN");

  return (
    <DashboardShell role="ADMIN">
      <main className="p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--nss-red)]">Admin</div>
                <h1 className="mt-2 text-3xl font-black text-slate-900">Good morning, Admin</h1>
              </div>
              <div className="rounded-full bg-emerald-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Session 2026-27 ACTIVE
              </div>
            </div>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {data.stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="mt-3 text-3xl font-black text-[var(--nss-blue)]">{item.value}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.hint}</div>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">System overview</div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {[
                ["Active Session", "2026–2027", "ACTIVE"],
                ["Registration Status", "Open", "LIVE"],
                ["Profile Completion", "86%", "ON TRACK"],
                ["Pending Approvals", "12", "REVIEW"],
                ["Retention Status", "Healthy", "OK"],
              ].map(([label, value, tag]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</div>
                  <div className="mt-3 text-2xl font-black text-slate-900">{value}</div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </DashboardShell>
  );
}
