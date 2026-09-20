"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { BrandMark } from "@/components/ui/BrandMark";

export default function VolunteerRegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("Enter your details to start your NSS registration.");
  const [form, setForm] = useState({
    fullName: "Amanpreet Kaur",
    rollNumber: "2026-CS-014",
    email: "amanpreet@student.pggc46.edu.in",
    mobile: "+91 98765 43210",
    password: "Password@123",
    otp: "123456",
  });

  const steps = ["Basic Info", "Verification", "Profile", "Complete"]; 

  const onChange = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Validating your volunteer details...");

    try {
      const response = await fetch("/api/volunteer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          rollNumber: form.rollNumber,
          email: form.email,
          mobile: form.mobile,
          password: form.password,
        }),
      });

      const payload = (await response.json()) as { error?: string; debugOtp?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Registration failed");
      }

      setForm((current) => ({ ...current, otp: payload.debugOtp ?? current.otp }));
      setStatus("OTP sent to your mobile number. Please verify to continue.");
      setStep(2);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Registration failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("Verifying your mobile number...");

    try {
      const response = await fetch("/api/volunteer/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: form.otp }),
      });

      const payload = (await response.json()) as { error?: string; nextStep?: string };

      if (!response.ok) {
        throw new Error(payload.error || "OTP verification failed");
      }

      setStatus("Mobile verification complete. You may continue to complete your profile.");
      setStep(3);
      if (payload.nextStep) {
        router.push(payload.nextStep);
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "OTP verification failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,44,89,0.08)]">
        <div className="border-b border-slate-200 px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <BrandMark compact />
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">PGGC-46 NSS</div>
                <div className="text-sm font-bold text-slate-900">Volunteer registration</div>
              </div>
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
              Step {step} of 3
            </div>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
            {steps.map((label, index) => {
              const isActive = index + 1 === step;
              const isPassed = index + 1 < step;
              return (
                <div
                  key={label}
                  className={`rounded-full px-2 py-1.5 ${isActive ? "bg-[var(--nss-blue)] text-white" : isPassed ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}
                >
                  {label}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden bg-[radial-gradient(circle_at_top,_rgba(20,59,122,0.08),_transparent_55%),linear-gradient(180deg,#143b7a_0%,#112d5b_100%)] p-8 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">NOT ME, BUT YOU</div>
              <h1 className="mt-5 text-4xl font-black tracking-tight">Join the NSS community.</h1>
              <p className="mt-4 max-w-sm text-slate-100/85">
                Help build a stronger, more compassionate campus through service, leadership, and student participation.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-200">National Service Scheme</div>
              <div className="mt-2 text-xl font-bold">PGGC-46, Sector 46</div>
              <div className="text-sm text-slate-100/80">Chandigarh</div>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            {step === 1 && (
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="mb-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">Create your volunteer account</div>
                  <h2 className="mt-2 text-3xl font-black text-slate-900">Get started</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Full Name</span>
                    <input value={form.fullName} onChange={(e) => onChange("fullName", e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-[var(--nss-blue)] focus:ring-2 focus:ring-blue-100" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">College Roll Number</span>
                    <input value={form.rollNumber} onChange={(e) => onChange("rollNumber", e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-[var(--nss-blue)] focus:ring-2 focus:ring-blue-100" />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Mobile Number</span>
                    <input value={form.mobile} onChange={(e) => onChange("mobile", e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-[var(--nss-blue)] focus:ring-2 focus:ring-blue-100" />
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
                    <input type="email" value={form.email} onChange={(e) => onChange("email", e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-[var(--nss-blue)] focus:ring-2 focus:ring-blue-100" />
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-medium text-slate-700">Password</span>
                    <input type="password" value={form.password} onChange={(e) => onChange("password", e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-slate-900 outline-none transition focus:border-[var(--nss-blue)] focus:ring-2 focus:ring-blue-100" />
                  </label>
                </div>

                <button disabled={isSubmitting} type="submit" className="w-full rounded-xl bg-[var(--nss-blue)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--nss-blue-deep)] disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? "Sending OTP..." : "Continue"}
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div className="mb-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">Verify your mobile number</div>
                  <h2 className="mt-2 text-3xl font-black text-slate-900">Enter OTP</h2>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                  OTP sent to <span className="font-semibold">{form.mobile}</span>.
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700">6-digit OTP</span>
                  <input value={form.otp} onChange={(e) => onChange("otp", e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center text-xl font-semibold tracking-[0.5em] text-slate-900 outline-none transition focus:border-[var(--nss-blue)] focus:ring-2 focus:ring-blue-100" />
                </label>

                <button disabled={isSubmitting} type="submit" className="w-full rounded-xl bg-[var(--nss-blue)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--nss-blue-deep)] disabled:cursor-not-allowed disabled:opacity-70">
                  {isSubmitting ? "Verifying..." : "Verify"}
                </button>
              </form>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <div className="mb-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">Welcome to PGGC-46 NSS</div>
                  <h2 className="mt-2 text-3xl font-black text-slate-900">Your account is ready.</h2>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                  Your account has been created. Complete your volunteer profile to unlock your NSS journey.
                </div>

                <div className="flex gap-3">
                  <Link href="/volunteer/profile/complete" className="flex-1 rounded-xl bg-[var(--nss-blue)] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--nss-blue-deep)]">
                    Complete profile
                  </Link>
                  <Link href="/login" className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-300">
                    Login
                  </Link>
                </div>
              </div>
            )}

            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-600">
              {status}
            </div>

            <div className="mt-5 text-center text-sm text-slate-500">
              Already registered? <Link href="/login" className="font-semibold text-[var(--nss-blue)]">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
