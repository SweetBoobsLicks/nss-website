const sections = [
  { name: "Hero heading", value: "Mission-driven portal for community service" },
  { name: "Campus summary", value: "4 roles, 9 programs, and active volunteer coordination" },
  { name: "Impact banner", value: "Serving PGGC-46 with meaningful social change and community outreach" },
];

export default function AdminCmsPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Content management</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="card space-y-4">
            {sections.map((section) => (
              <label key={section.name} className="block">
                <span className="mb-2 block text-sm font-medium text-slate-300">{section.name}</span>
                <input defaultValue={section.value} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
              </label>
            ))}
            <div className="flex justify-end pt-2">
              <button className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
                Save changes
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="card">
              <div className="text-sm text-slate-400">Live preview</div>
              <div className="mt-3 text-2xl font-black text-white">PGGC-46 NSS Wing</div>
              <div className="mt-2 text-sm text-slate-300">Volunteer coordination, outreach campaigns, and transparent event reporting.</div>
            </div>
            <div className="card">
              <div className="text-sm text-slate-400">Last updated</div>
              <div className="mt-3 text-xl font-black text-emerald-300">Today, 9:14 AM</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
