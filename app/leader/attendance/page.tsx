const attendance = [
  { name: "Ritika Nair", status: "Present", hours: "4h" },
  { name: "Sarthak Rao", status: "Excused", hours: "2h" },
  { name: "Manav Gupta", status: "Present", hours: "5h" },
  { name: "Simran Kaur", status: "Late", hours: "3h" },
];

export default function LeaderAttendancePage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Leader</p>
          <h1 className="mt-2 text-3xl font-black text-white">Attendance tracking</h1>
        </div>

        <div className="card overflow-hidden">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black text-white">This week</h2>
            <button className="rounded-xl border border-emerald-500/50 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Mark attendance
            </button>
          </div>

          <div className="space-y-3">
            {attendance.map((member) => (
              <div key={member.name} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">
                <div>
                  <div className="font-medium text-white">{member.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{member.hours} contributed</div>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                  member.status === "Present" ? "bg-emerald-500/15 text-emerald-300" : member.status === "Excused" ? "bg-sky-500/15 text-sky-300" : "bg-amber-500/15 text-amber-300"
                }`}>
                  {member.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
