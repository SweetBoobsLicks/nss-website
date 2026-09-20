export default function NewEventPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Program office</p>
          <h1 className="mt-2 text-3xl font-black text-white">Create new event</h1>
        </div>

        <form className="card space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">Event title</span>
              <input defaultValue="NSS Mega Volunteer Day" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">Category</span>
              <select defaultValue="Community service" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500">
                <option>Community service</option>
                <option>Awareness drive</option>
                <option>Education support</option>
                <option>Health camp</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">Date</span>
              <input type="date" defaultValue="2026-10-03" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">Venue</span>
              <input defaultValue="PGGC-46 Campus" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-300">Capacity</span>
              <input defaultValue="120" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">Description</span>
            <textarea defaultValue="A coordinated campus drive focused on cleanliness, awareness, and community engagement across the NSS wing." rows={5} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
          </label>

          <div className="flex items-center justify-between gap-3 border-t border-slate-800 pt-4">
            <button type="button" className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-500">
              Save draft
            </button>
            <button type="submit" className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
              Publish event
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
