const galleryItems = [
  { title: "Tree plantation", tag: "Environment" },
  { title: "Women empowerment seminar", tag: "Awareness" },
  { title: "Campus clean drive", tag: "Community" },
  { title: "Health outreach", tag: "Wellness" },
];

export default function AdminGalleryPage() {
  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-white">Gallery</h1>
        </div>

        <div className="card mb-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl font-black text-white">Media library</div>
              <div className="mt-1 text-sm text-slate-400">Upload campaign, event, and outreach imagery.</div>
            </div>
            <button className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
              Upload photos
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <div key={item.title} className="card">
              <div className="h-36 rounded-2xl bg-gradient-to-br from-emerald-500/25 via-slate-800 to-slate-950" />
              <div className="mt-4 text-lg font-black text-white">{item.title}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-emerald-300">{item.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
