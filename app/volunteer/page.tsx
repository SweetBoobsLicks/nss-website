import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";

export default async function VolunteerPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "VOLUNTEER") {
    redirect("/");
  }

  return (
    <AppShell title="Volunteer Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Profile</p>
          <h3 className="mt-2 text-xl font-bold">Aman Singh</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Hours Logged</p>
          <h3 className="mt-2 text-3xl font-bold">84</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">RSVP Status</p>
          <h3 className="mt-2 text-3xl font-bold">3</h3>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h4 className="mb-5 text-xl font-semibold">Upcoming Events</h4>
        <div className="space-y-3">
          <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold">Tree Plantation Drive</h5>
              <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400">GOING</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">25 Sep 2026 • Sector 46 Park</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold">Swachh Bharat Awareness</h5>
              <span className="rounded-full bg-slate-700 px-2 py-1 text-xs text-slate-200">RSVP</span>
            </div>
            <p className="mt-2 text-sm text-slate-300">30 Sep 2026 • College Campus</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
