"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const requiredFields = [
  { key: "parentName", label: "Parent / Guardian Name", placeholder: "Rajveer Singh" },
  { key: "address", label: "Full Address", placeholder: "Sector 46, Chandigarh" },
  { key: "area", label: "Area", placeholder: "Manimajra" },
  { key: "pinCode", label: "PIN Code", placeholder: "160047" },
  { key: "gender", label: "Gender", placeholder: "Female" },
  { key: "category", label: "Category", placeholder: "General" },
  { key: "aadhaar", label: "Aadhaar Number", placeholder: "********1234" },
  { key: "className", label: "Class", placeholder: "B.Sc. II Year" },
] as const;

export default function VolunteerProfileCompletePage() {
  const router = useRouter();
  const [form, setForm] = useState<Record<string, string>>({
    parentName: "Rajveer Singh",
    address: "Sector 46, Chandigarh",
    area: "Manimajra",
    pinCode: "160047",
    gender: "Female",
    category: "General",
    aadhaar: "********1234",
    className: "B.Sc. II Year",
  });
  const [status, setStatus] = useState("Complete the required profile fields to activate your NSS access.");
  const [isSaving, setIsSaving] = useState(false);

  const updateField = (key: string, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setStatus("Saving your profile details...");

    try {
      const response = await fetch("/api/volunteer/profile/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Profile update failed");
      }

      setStatus("Profile completed successfully. Redirecting to your dashboard...");
      router.push("/volunteer");
      router.refresh();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Profile update failed");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="dashboard-shell p-4 sm:p-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Volunteer</p>
            <h1 className="mt-2 text-3xl font-black text-white">Complete profile</h1>
          </div>
          <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Profile Completion: 100%
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="card space-y-4">
            {requiredFields.map((field) => (
              <label key={field.key} className="block">
                <span className="mb-2 block text-sm text-slate-300">{field.label}</span>
                <input
                  value={form[field.key] ?? ""}
                  onChange={(event) => updateField(field.key, event.target.value)}
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2.5 text-white outline-none focus:border-emerald-500"
                />
              </label>
            ))}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSaving}
                className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSaving ? "Saving..." : "Save profile"}
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <div className="card">
              <div className="text-sm text-slate-400">Profile stages</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li>• Initial Registration</li>
                <li>• Additional Required Information</li>
                <li>• Optional Information</li>
              </ul>
            </div>

            <div className="card">
              <div className="text-sm text-slate-400">Next steps</div>
              <div className="mt-3">
                <Link href="/volunteer" className="inline-flex rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
                  Open dashboard
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="text-sm text-slate-400">Status</div>
              <div className="mt-3 text-sm text-slate-200">{status}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
