const users = [
  { name: "Aarav Sharma", role: "Volunteer", team: "Cleanliness Drive", status: "Approved" },
  { name: "Kavya Mehta", role: "Leader", team: "Awareness Campaign", status: "Review" },
  { name: "Rahul Singh", role: "Program Officer", team: "Operations", status: "Active" },
  { name: "Neha Verma", role: "Volunteer", team: "Education Support", status: "Pending" },
];

export default function AdminUsersPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">User management</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="card">
            <div className="text-sm text-slate-400">Approved</div>
            <div className="mt-3 text-3xl font-black text-emerald-300">94</div>
          </div>
          <div className="card">
            <div className="text-sm text-slate-400">Pending</div>
            <div className="mt-3 text-3xl font-black text-amber-300">12</div>
          </div>
          <div className="card">
            <div className="text-sm text-slate-400">Inactive</div>
            <div className="mt-3 text-3xl font-black text-sky-300">07</div>
          </div>
        </div>

        <div className="mt-6 card overflow-hidden">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black text-white">Recent approvals</h2>
            <button className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Export
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="border-b border-slate-800 text-slate-400">
                <tr>
                  <th className="pb-3 pr-4">Name</th>
                  <th className="pb-3 pr-4">Role</th>
                  <th className="pb-3 pr-4">Team</th>
                  <th className="pb-3 pr-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.name} className="border-b border-slate-800/80 last:border-b-0">
                    <td className="py-3 pr-4 font-medium text-white">{user.name}</td>
                    <td className="py-3 pr-4">{user.role}</td>
                    <td className="py-3 pr-4">{user.team}</td>
                    <td className="py-3 pr-4">
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          user.status === "Approved"
                            ? "bg-emerald-500/15 text-emerald-300"
                            : user.status === "Pending"
                              ? "bg-amber-500/15 text-amber-300"
                              : "bg-sky-500/15 text-sky-300"
                        }`}
                      >
                        {user.status}
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
