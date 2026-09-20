const sessions = [
  { name: "2026–2027", status: "Active", endDate: "31 Mar 2027", purgeDate: "31 Mar 2029" },
  { name: "2025–2026", status: "Archived", endDate: "31 Mar 2026", purgeDate: "31 Mar 2028" },
  { name: "2024–2025", status: "Retention window", endDate: "31 Mar 2025", purgeDate: "31 Mar 2027" },
];

export default function AdminSessionsPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Academic sessions</h1>
        </div>

        <div className="grid gap-4">
          {sessions.map((session) => (
            <div key={session.name} className="card flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xl font-black text-white">{session.name}</div>
                <div className="mt-1 text-sm text-slate-400">Ends: {session.endDate}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">{session.status}</span>
                <span className="text-sm text-emerald-300">Purge: {session.purgeDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
