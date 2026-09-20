"use client";

import Link from "next/link";
import { useState } from "react";

export default function VolunteerVerifyPhonePage() {
  const [otp, setOtp] = useState("123456");

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center justify-center px-4 py-10">
      <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/85 p-6 shadow-2xl shadow-slate-950/50">
        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.2em] text-emerald-400">Verify mobile</div>
          <h1 className="mt-2 text-3xl font-black text-white">Enter OTP</h1>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-300">
          An OTP was sent to +91 98765 43210.
        </div>

        <form className="mt-5 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">6-digit OTP</span>
            <input value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-center text-xl font-semibold tracking-[0.5em] text-white outline-none focus:border-emerald-500" />
          </label>

          <button type="submit" className="w-full rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
            Verify and continue
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-slate-400">
          <Link href="/volunteer/register" className="font-medium text-emerald-300 hover:text-emerald-200">Back to registration</Link>
        </div>
      </div>
    </main>
  );
}
