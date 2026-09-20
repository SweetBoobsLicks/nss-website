export default function AdminUserDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">User profile</h1>
        </div>

        <div className="card space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-black text-white">Amanpreet Kaur</div>
              <div className="text-sm text-slate-400">Volunteer • Roll: 2026-CS-014</div>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">Active</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-sm text-slate-400">Email</div>
              <div className="mt-2 text-white">amanpreet@student.pggc46.edu.in</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-sm text-slate-400">Mobile</div>
              <div className="mt-2 text-white">+91 98765 43210</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-sm text-slate-400">Department</div>
              <div className="mt-2 text-white">Computer Science</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="text-sm text-slate-400">Class</div>
              <div className="mt-2 text-white">B.Sc. II Year</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 hover:border-slate-500">Activate</button>
            <button className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 hover:border-slate-500">Promote</button>
            <button className="rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400">Edit</button>
            <button className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-sm font-medium text-rose-200 hover:bg-rose-500/15">Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
}
