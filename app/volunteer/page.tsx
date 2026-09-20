import { DashboardShell } from "@/app/dashboard-shell";
import { getPortalDashboardData } from "@/lib/portal-data";

export default async function VolunteerPage() {
  const data = await getPortalDashboardData("VOLUNTEER");

  return (
    <DashboardShell role="VOLUNTEER">
      <main className="p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--nss-red)]">Volunteer</div>
                <h1 className="mt-2 text-3xl font-black text-slate-900">Good morning, Aman 👋</h1>
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
                PGGC-46 NSS
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

          <div className="mb-6 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">Profile completion</div>
                <h2 className="mt-2 text-xl font-black text-slate-900">80% complete</h2>
              </div>
              <button className="rounded-xl bg-[var(--nss-blue)] px-4 py-2.5 text-sm font-semibold text-white">Complete Profile</button>
            </div>
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[80%] rounded-full bg-[var(--nss-blue)]" />
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">Upcoming event</div>
                  <h2 className="mt-2 text-2xl font-black text-slate-900">Tree Plantation Drive</h2>
                </div>
                <button className="rounded-xl bg-[var(--nss-red)] px-3 py-2 text-sm font-semibold text-white">RSVP</button>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div><span className="font-semibold text-slate-900">Date:</span> 12 Sep 2026</div>
                <div><span className="font-semibold text-slate-900">Location:</span> PGGC-46 Campus</div>
                <div><span className="font-semibold text-slate-900">Focus:</span> Sustainability and community care</div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">Recent activity</div>
              <div className="mt-4 space-y-3">
                {[
                  "Orientation session completed",
                  "Volunteer hour log submitted",
                  "Cleanliness drive registered",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </DashboardShell>
  );
}
