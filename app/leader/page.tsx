import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { LeaderSquadBoard } from "@/components/leader-squad-board";

export default async function LeaderPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "LEADER") {
    redirect("/");
  }

  return (
    <AppShell title="Leader Dashboard">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Active Teams</p>
          <h3 className="mt-2 text-3xl font-bold">03</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Attendance Rate</p>
          <h3 className="mt-2 text-3xl font-bold">91%</h3>
        </div>
      </div>

      <LeaderSquadBoard />
    </AppShell>
  );
}
