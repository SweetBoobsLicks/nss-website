export default function CreatePoPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Create Program Officer</h1>
        </div>

        <form className="card space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Name</span>
            <input defaultValue="Dr. Rakesh Bansal" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Mobile Number</span>
              <input defaultValue="+91 98765 11223" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-slate-300">Email (optional)</span>
              <input defaultValue="po@pggc46.edu.in" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Department</span>
            <input defaultValue="NSS Coordination" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
          </label>

          <div className="flex justify-end">
            <button type="submit" className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
              Create account
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
