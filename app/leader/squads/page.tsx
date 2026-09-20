const squads = [
  { name: "Cleanliness Cell", members: 24, project: "Campus sanitation", progress: "82%" },
  { name: "Education Support", members: 18, project: "Tuition outreach", progress: "68%" },
  { name: "Awareness Unit", members: 21, project: "Health awareness", progress: "76%" },
];

export default function LeaderSquadsPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Leader</p>
          <h1 className="mt-2 text-3xl font-black text-white">Team squads</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {squads.map((squad) => (
            <div key={squad.name} className="card">
              <div className="text-lg font-black text-white">{squad.name}</div>
              <div className="mt-3 text-sm text-slate-400">{squad.project}</div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-slate-300">Members</span>
                <span className="text-lg font-black text-emerald-300">{squad.members}</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-emerald-500" style={{ width: squad.progress }} />
              </div>
              <div className="mt-2 text-right text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{squad.progress}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
