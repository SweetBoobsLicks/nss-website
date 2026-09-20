const rows = [
  { event: "Tree Plantation Drive", date: "12 Sep 2026", status: "Approved" },
  { event: "Cleanliness Awareness Walk", date: "21 Sep 2026", status: "Pending" },
  { event: "Health Camp Support", date: "02 Oct 2026", status: "Approved" },
];

export default function VolunteerAttendancePage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Volunteer</p>
          <h1 className="mt-2 text-3xl font-black text-white">Attendance</h1>
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="border-b border-slate-800 text-slate-400">
                <tr>
                  <th className="px-4 py-3">Event</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.event} className="border-b border-slate-800/80 last:border-b-0">
                    <td className="px-4 py-3 font-medium text-white">{row.event}</td>
                    <td className="px-4 py-3">{row.date}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${row.status === "Approved" ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
