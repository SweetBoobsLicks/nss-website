import { DashboardShell } from "@/app/dashboard-shell";
import { getPortalDashboardData } from "@/lib/portal-data";

export default async function ProgramOfficerPage() {
  const data = await getPortalDashboardData("PO");

  return (
    <DashboardShell role="PO">
      <main className="p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--nss-red)]">Program officer</div>
                <h1 className="mt-2 text-3xl font-black text-slate-900">Good morning, Dr. Sharma</h1>
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                Session 2026-27
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
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">Action required</div>
            <div className="space-y-3">
              {[
                "12 attendance submissions need review",
                "3 volunteer profiles need attention",
                "1 event tomorrow",
              ].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                  <button className="rounded-xl bg-[var(--nss-blue)] px-3 py-2 text-xs font-semibold text-white">Review</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </DashboardShell>
  );
}
