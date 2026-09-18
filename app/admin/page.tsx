import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { DashboardCard } from "@/components/dashboard-card";
import { MOCK_DASHBOARD } from "@/lib/mock-data";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <AppShell title="Admin Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        <DashboardCard label="Total Volunteers" value={String(MOCK_DASHBOARD.totalVolunteers)} />
        <DashboardCard label="Active Events" value={String(MOCK_DASHBOARD.activeEvents)} />
        <DashboardCard label="Announcements" value={String(MOCK_DASHBOARD.announcements).padStart(2, "0")} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h4 className="mb-4 text-lg font-semibold">Public Website CMS</h4>
          <div className="space-y-3">
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white" placeholder="Hero heading" defaultValue="Volunteer for a cleaner, kinder campus" />
            <textarea className="h-28 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white" placeholder="Announcement text" defaultValue="This month’s NSS calendar is live. Join us for a campus clean drive, tree plantation, and awareness session." />
            <button className="rounded-xl bg-emerald-500 px-4 py-2 font-medium text-white">Publish</button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h4 className="mb-4 text-lg font-semibold">Role Management</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            {Object.entries(MOCK_DASHBOARD.roleBreakdown).map(([role, count]) => (
              <li key={role} className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
                <span>{role}</span>
                <span className="text-emerald-400">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
