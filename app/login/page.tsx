"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { BrandMark } from "@/components/ui/BrandMark";

const roleRedirects: Record<string, string> = {
  ADMIN: "/admin",
  PO: "/po",
  LEADER: "/leader",
  VOLUNTEER: "/volunteer",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@pggc46.edu.in");
  const [password, setPassword] = useState("password123");
  const [status, setStatus] = useState("Enter your NSS credentials to continue.");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Authenticating...");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const payload = (await response.json()) as { error?: string; user?: { role?: string } };

      if (!response.ok || !payload.user?.role) {
        throw new Error(payload.error || "Authentication failed");
      }

      const redirectPath = roleRedirects[payload.user.role] ?? "/";
      setStatus(`Signed in as ${payload.user.role}. Redirecting...`);
      router.push(redirectPath);
      router.refresh();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Authentication failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(20,59,122,0.12)] lg:grid-cols-[1fr_0.95fr]">
        <div className="hidden bg-[radial-gradient(circle_at_top,_rgba(20,59,122,0.06),_transparent_45%),linear-gradient(180deg,#143b7a_0%,#0f2c59_100%)] p-8 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <BrandMark className="!items-center" showWordmark={false} compact />
            <div className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200">PGGC-46 NSS</div>
            <h1 className="mt-4 text-4xl font-black tracking-tight">NOT ME, BUT YOU</h1>
            <p className="mt-4 max-w-sm text-base text-slate-100/85">
              Service, leadership, and community responsibility for a stronger campus and society.
            </p>
          </div>
          <div className="rounded-[24px] border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">National Service Scheme</div>
            <div className="mt-2 text-xl font-bold">Post Graduate Government College</div>
            <div className="text-sm text-slate-100/80">Sector 46, Chandigarh</div>
          </div>
        </div>

        <div className="p-5 sm:p-8">
          <div className="mb-8 flex items-center justify-center lg:hidden">
            <BrandMark compact />
          </div>

          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">Sign in</div>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Welcome back</h2>
            <p className="mt-2 text-sm text-slate-600">PGGC-46 NSS portal access</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-[var(--nss-blue)] focus:ring-2 focus:ring-blue-100"
                type="email"
                placeholder="name@pggc46.edu.in"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-700">
                <label>Password</label>
                <button type="button" className="font-medium text-[var(--nss-blue)]">Forgot password?</button>
              </div>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-[var(--nss-blue)] focus:ring-2 focus:ring-blue-100"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[var(--nss-blue)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--nss-blue-deep)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Signing in..." : "Login"}
            </button>
          </form>

          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-600">
            {status}
          </div>

          <div className="mt-5 text-center text-sm text-slate-500">
            New volunteer? <Link href="/volunteer/register" className="font-semibold text-[var(--nss-blue)]">Join NSS</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
