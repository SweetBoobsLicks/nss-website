export default function VolunteerProfilePage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Volunteer</p>
          <h1 className="mt-2 text-3xl font-black text-white">Profile</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="card space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-sm text-slate-400">Full Name</div>
              <div className="mt-2 text-xl font-black text-white">Amanpreet Kaur</div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="text-sm text-slate-400">Roll Number</div>
                <div className="mt-2 text-white">2026-CS-014</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                <div className="text-sm text-slate-400">Mobile</div>
                <div className="mt-2 text-white">+91 98765 43210</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="text-sm text-slate-400">Profile completion</div>
            <div className="mt-3 text-4xl font-black text-emerald-300">100%</div>
            <div className="mt-4 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-full rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
