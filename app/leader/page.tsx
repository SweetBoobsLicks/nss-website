import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";

export default async function LeaderPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "LEADER") {
    redirect("/");
  }

  return (
    <AppShell title="Leader Dashboard">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h4 className="mb-4 text-lg font-semibold">Assigned Squad</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="rounded-xl bg-slate-800 px-3 py-2">Volunteer Team A</li>
            <li className="rounded-xl bg-slate-800 px-3 py-2">Volunteer Team B</li>
            <li className="rounded-xl bg-slate-800 px-3 py-2">Volunteer Team C</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <h4 className="mb-4 text-lg font-semibold">Attendance</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
              <span>Aman</span>
              <span className="text-emerald-400">Present</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
              <span>Riya</span>
              <span className="text-yellow-400">Late</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-800 px-3 py-2">
              <span>Neha</span>
              <span className="text-red-400">Absent</span>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
