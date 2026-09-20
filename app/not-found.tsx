import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">404</p>
        <h1 className="mt-3 text-3xl font-black text-white">Page not found</h1>
        <Link href="/" className="mt-5 inline-block rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">
          Return home
        </Link>
      </div>
    </main>
  );
}
