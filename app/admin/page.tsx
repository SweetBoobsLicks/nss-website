import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "ADMIN") {
    redirect("/");
  }

  return (
    <AppShell title="Admin Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Total Volunteers</p>
          <h3 className="mt-2 text-3xl font-bold">248</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Active Events</p>
          <h3 className="mt-2 text-3xl font-bold">14</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Announcements</p>
          <h3 className="mt-2 text-3xl font-bold">06</h3>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h4 className="mb-4 text-lg font-semibold">Public Website CMS</h4>
          <div className="space-y-3">
            <input className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white" placeholder="Hero heading" />
            <textarea className="h-28 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white" placeholder="Announcement text" />
            <button className="rounded-xl bg-emerald-500 px-4 py-2 font-medium text-white">Publish</button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h4 className="mb-4 text-lg font-semibold">Role Management</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
              <span>Program Officer</span>
              <span className="text-emerald-400">3</span>
            </li>
            <li className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
              <span>Leader</span>
              <span className="text-emerald-400">12</span>
            </li>
            <li className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
              <span>Volunteer</span>
              <span className="text-emerald-400">233</span>
            </li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
