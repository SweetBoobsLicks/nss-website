const announcements = [
  { title: "Campus cleanliness drive", audience: "All volunteers", time: "Today, 10:30 AM" },
  { title: "Heritage awareness seminar", audience: "Student groups", time: "Tomorrow, 2:00 PM" },
  { title: "Volunteer registration closing", audience: "New applicants", time: "Friday, 5:00 PM" },
];

export default function AdminAnnouncementsPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Announcements</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card">
            <h2 className="text-xl font-black text-white">Publish update</h2>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Title</span>
                <input defaultValue="Volunteer registration now open" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Audience</span>
                <select defaultValue="All volunteers" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500">
                  <option>All volunteers</option>
                  <option>Student groups</option>
                  <option>New applicants</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Message</span>
                <textarea rows={5} defaultValue="We are inviting new and returning NSS volunteers to participate in the next community engagement schedule. Please register before Friday to reserve your spot." className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500" />
              </label>
              <div className="flex justify-end">
                <button className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
                  Publish
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {announcements.map((item) => (
              <div key={item.title} className="card">
                <div className="text-lg font-black text-white">{item.title}</div>
                <div className="mt-2 text-sm text-slate-400">{item.audience}</div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
