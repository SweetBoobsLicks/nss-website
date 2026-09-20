import { DashboardShell } from "@/app/dashboard-shell";
import { getPortalDashboardData } from "@/lib/portal-data";

export default async function LeaderPage() {
  const data = await getPortalDashboardData("LEADER");

  return (
    <DashboardShell role="LEADER">
      <main className="p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--nss-red)]">Leader</div>
                <h1 className="mt-2 text-3xl font-black text-slate-900">Welcome, Riya</h1>
              </div>
              <button className="rounded-xl bg-[var(--nss-blue)] px-4 py-2.5 text-sm font-semibold text-white">Take attendance</button>
            </div>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-3">
            {data.stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="mt-3 text-3xl font-black text-[var(--nss-blue)]">{item.value}</div>
                <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.hint}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-black text-slate-900">My squad</h2>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">12 volunteers</span>
              </div>

              <div className="space-y-3">
                {[
                  { name: "Neha Sharma", attendance: true, task: true },
                  { name: "Arjun Singh", attendance: true, task: false },
                  { name: "Pooja Verma", attendance: false, task: true },
                  { name: "Karan Mehta", attendance: true, task: true },
                ].map((member) => (
                  <div key={member.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                    <div>
                      <div className="font-semibold text-slate-900">{member.name}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">Volunteer</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em]">
                      <span className={`rounded-full px-2 py-1 ${member.attendance ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                        {member.attendance ? "Present" : "Pending"}
                      </span>
                      <span className={`rounded-full px-2 py-1 ${member.task ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-700"}`}>
                        {member.task ? "Task done" : "Task due"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">Tasks</div>
              <h2 className="mt-2 text-xl font-black text-slate-900">Today</h2>
              <div className="mt-4 space-y-3">
                {[
                  "Open campus awareness activity",
                  "Volunteer reminder sendout",
                  "Event equipment checklist",
                ].map((task) => (
                  <div key={task} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    {task}
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
