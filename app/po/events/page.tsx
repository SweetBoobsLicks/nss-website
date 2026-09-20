const events = [
  { title: "Tree Plantation Drive", date: "12 Sep 2026", rsvp: "58 / 80", status: "Open" },
  { title: "Blood Donation Camp", date: "19 Sep 2026", rsvp: "72 / 100", status: "Confirmed" },
  { title: "Cleanliness Awareness Walk", date: "03 Oct 2026", rsvp: "41 / 60", status: "Draft" },
];

export default function PoEventsPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Program office</p>
            <h1 className="mt-2 text-3xl font-black text-white">Event planning</h1>
          </div>
          <a href="/po/events/new" className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
            New event
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="card">
            <div className="text-sm text-slate-400">Open</div>
            <div className="mt-3 text-3xl font-black text-emerald-300">08</div>
          </div>
          <div className="card">
            <div className="text-sm text-slate-400">RSVPs</div>
            <div className="mt-3 text-3xl font-black text-sky-300">432</div>
          </div>
          <div className="card">
            <div className="text-sm text-slate-400">Pending</div>
            <div className="mt-3 text-3xl font-black text-amber-300">05</div>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {events.map((event) => (
            <div key={event.title} className="card flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-xl font-black text-white">{event.title}</div>
                <div className="mt-1 text-sm text-slate-400">{event.date}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-300">{event.rsvp}</span>
                <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  {event.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
