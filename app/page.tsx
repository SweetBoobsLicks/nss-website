"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">PGGC-46</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">NSS Portal</h1>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            Volunteer engagement, event coordination, and leadership workflows for the National Service Scheme wing of PGGC-46.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/login" className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-white">
              Open Portal
            </Link>
            <Link href="/volunteer" className="rounded-xl border border-slate-600 px-5 py-3 font-semibold text-slate-200">
              Volunteer View
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
