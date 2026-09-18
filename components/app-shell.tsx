import Link from "next/link";
import type { ReactNode } from "react";

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <aside className="hidden h-screen w-72 border-r border-slate-800 bg-slate-900 p-5 md:block">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">PGGC-46</p>
          <h1 className="mt-2 text-2xl font-bold">NSS Portal</h1>
        </div>

        <nav className="space-y-2 text-sm">
          <Link href="/admin" className="block rounded-xl bg-slate-800 px-3 py-2 text-slate-100">
            Dashboard
          </Link>
          <Link href="/admin" className="block rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800">
            Public CMS
          </Link>
          <Link href="/admin" className="block rounded-xl px-3 py-2 text-slate-300 hover:bg-slate-800">
            User Roles
          </Link>
        </nav>
      </aside>

      <main className="pb-24 md:ml-72">
        <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 px-4 py-4 backdrop-blur">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button className="rounded-full bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white">
              Active
            </button>
          </div>
        </header>

        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
