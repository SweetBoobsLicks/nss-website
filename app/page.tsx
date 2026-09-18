"use client";

import Link from "next/link";
import { useEffect } from "react";

const features = [
  { title: "Role-based access", copy: "Admin, PO, leader, and volunteer flows remain isolated and permission-aware." },
  { title: "Event operations", copy: "Program officers can schedule outreach, awareness, and volunteering events in one place." },
  { title: "Volunteer engagement", copy: "Members can RSVP and track their participation across NSS activities." },
];

export default function HomePage() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl md:p-12">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">PGGC-46</p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">NSS Portal</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Volunteer engagement, event coordination, and leadership workflows for the NSS wing of PGGC-46.
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

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{feature.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
