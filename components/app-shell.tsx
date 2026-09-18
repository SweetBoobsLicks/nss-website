import Link from "next/link";
import type { ReactNode } from "react";

const roleLinks = [
  { href: "/admin", label: "Admin" },
  { href: "/po", label: "Program Office" },
  { href: "/leader", label: "Leader" },
  { href: "/volunteer", label: "Volunteer" },
];

export function AppShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <aside className="hidden h-screen w-72 border-r border-slate-800 bg-slate-900 p-5 md:block">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">PGGC-46</p>
          <h1 className="mt-2 text-2xl font-bold">NSS Portal</h1>
        </div>

        <nav className="space-y-2 text-sm">
          {roleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-3 py-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="mt-4 block rounded-xl bg-emerald-500 px-3 py-2 text-center font-medium text-white">
            Sign in
          </Link>
        </nav>
      </aside>

      <main className="pb-24 md:ml-72">
        <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 px-4 py-4 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">Live</span>
              <Link href="/login" className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200">
                Portal
              </Link>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
