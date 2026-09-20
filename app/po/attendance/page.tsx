const attendanceRows = [
  { name: "Amanpreet Kaur", event: "Tree Plantation Drive", status: "Pending", date: "12 Sep 2026" },
  { name: "Riya Jain", event: "Blood Donation Camp", status: "Approved", date: "19 Sep 2026" },
  { name: "Paras Verma", event: "Cleanliness Walk", status: "Rejected", date: "21 Sep 2026" },
];

export default function PoAttendancePage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">PO</p>
          <h1 className="mt-2 text-3xl font-black text-white">Attendance review</h1>
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="border-b border-slate-800 text-slate-400">
                <tr>
                  <th className="px-4 py-3">Volunteer</th>
                  <th className="px-4 py-3">Event</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRows.map((row) => (
                  <tr key={`${row.name}-${row.event}`} className="border-b border-slate-800/80 last:border-b-0">
                    <td className="px-4 py-3 font-medium text-white">{row.name}</td>
                    <td className="px-4 py-3">{row.event}</td>
                    <td className="px-4 py-3">{row.date}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${row.status === "Approved" ? "bg-emerald-500/15 text-emerald-300" : row.status === "Rejected" ? "bg-rose-500/15 text-rose-300" : "bg-amber-500/15 text-amber-300"}`}>
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
