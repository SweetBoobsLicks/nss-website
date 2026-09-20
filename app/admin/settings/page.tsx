const settings = [
  { label: "Volunteer Registration Open", value: "Open" },
  { label: "Require Mobile Verification", value: "Required" },
  { label: "Require Student Roll Number", value: "Required" },
  { label: "Require Parent Name", value: "Required" },
  { label: "Require Aadhaar", value: "Required" },
  { label: "Maximum Volunteer Count", value: "500" },
  { label: "Allowed Departments", value: "Arts, Science, Commerce" },
  { label: "Allowed Email Domains", value: "@pggc46.edu.in" },
];

export default function AdminSettingsPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Application settings</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {settings.map((item) => (
            <div key={item.label} className="card">
              <div className="text-sm text-slate-400">{item.label}</div>
              <div className="mt-3 text-xl font-black text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
