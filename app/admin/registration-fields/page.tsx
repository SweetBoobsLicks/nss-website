const fields = [
  { name: "Blood Group", type: "SELECT", stage: "PROFILE_COMPLETION", required: true, active: true },
  { name: "Emergency Contact", type: "PHONE", stage: "PROFILE_COMPLETION", required: true, active: true },
  { name: "Health Condition", type: "LONG_TEXT", stage: "OPTIONAL", required: false, active: true },
  { name: "Preferred District", type: "SELECT", stage: "REGISTRATION", required: false, active: false },
];

export default function AdminRegistrationFieldsPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
            <h1 className="mt-2 text-3xl font-black text-white">Registration fields</h1>
          </div>
          <button className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
            Add field
          </button>
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="border-b border-slate-800 text-slate-400">
                <tr>
                  <th className="px-4 py-3">Field</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Stage</th>
                  <th className="px-4 py-3">Required</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {fields.map((field) => (
                  <tr key={field.name} className="border-b border-slate-800/80 last:border-b-0">
                    <td className="px-4 py-3 font-medium text-white">{field.name}</td>
                    <td className="px-4 py-3">{field.type}</td>
                    <td className="px-4 py-3">{field.stage}</td>
                    <td className="px-4 py-3">{field.required ? "Yes" : "No"}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${field.active ? "bg-emerald-500/15 text-emerald-300" : "bg-slate-700 text-slate-300"}`}>
                        {field.active ? "Active" : "Disabled"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2 text-xs text-slate-300">
                        <button className="hover:text-white">Edit</button>
                        <button className="hover:text-white">Disable</button>
                        <button className="text-rose-300 hover:text-rose-200">Delete</button>
                      </div>
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
