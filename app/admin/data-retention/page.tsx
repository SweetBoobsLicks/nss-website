export default function AdminDataRetentionPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Data retention</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="card">
            <div className="text-sm text-slate-400">Current session</div>
            <div className="mt-3 text-3xl font-black text-emerald-300">2026–2027</div>
          </div>
          <div className="card">
            <div className="text-sm text-slate-400">Next purge</div>
            <div className="mt-3 text-3xl font-black text-sky-300">Daily</div>
          </div>
          <div className="card">
            <div className="text-sm text-slate-400">Sessions awaiting purge</div>
            <div className="mt-3 text-3xl font-black text-amber-300">03</div>
          </div>
          <div className="card">
            <div className="text-sm text-slate-400">Records scheduled</div>
            <div className="mt-3 text-3xl font-black text-violet-300">1,284</div>
          </div>
        </div>

        <div className="mt-6 card">
          <div className="text-xl font-black text-white">Retention status</div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div>• Session retention is calculated from the academic session end date.</div>
            <div>• Data is purged automatically after the 2-year retention period.</div>
            <div>• Storage objects, auth records, and session-scoped records are deleted together.</div>
          </div>
        </div>
      </div>
    </main>
  );
}
