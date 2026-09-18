"use client";

import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const roleRedirectMap = {
  ADMIN: "/admin",
  PO: "/po",
  LEADER: "/leader",
  VOLUNTEER: "/volunteer",
} as const;

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@pggc46.edu.in");
  const [password, setPassword] = useState("password123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result?.ok) {
      setLoading(false);
      setError("Invalid email or password. Try the demo credentials from the seeded NSS users.");
      return;
    }

    const session = await getSession();
    const role = (session?.user as { role?: keyof typeof roleRedirectMap } | undefined)?.role;

    setLoading(false);

    if (role && role in roleRedirectMap) {
      router.push(roleRedirectMap[role]);
      router.refresh();
      return;
    }

    router.push("/volunteer");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-emerald-400">PGGC-46 NSS</p>
        <h1 className="mb-6 text-3xl font-bold text-white">Sign in</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white outline-none"
            />
          </div>

          {error ? (
            <p className="rounded-xl border border-red-600/40 bg-red-950/30 px-3 py-2 text-sm text-red-200">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-white hover:bg-emerald-400 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}
