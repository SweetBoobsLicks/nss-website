const projects = [
  { title: "Community Cleanliness Campaign", status: "In progress", progress: "82%" },
  { title: "Education Support Outreach", status: "Review", progress: "64%" },
  { title: "Health Awareness Week", status: "Planned", progress: "48%" },
];

export default function LeaderProjectsPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Leader</p>
          <h1 className="mt-2 text-3xl font-black text-white">Projects</h1>
        </div>

        <div className="grid gap-4">
          {projects.map((project) => (
            <div key={project.title} className="card">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xl font-black text-white">{project.title}</div>
                  <div className="mt-1 text-sm text-slate-400">{project.status}</div>
                </div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">{project.progress}</div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-emerald-500" style={{ width: project.progress }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
