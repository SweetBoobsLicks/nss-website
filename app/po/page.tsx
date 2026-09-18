import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { PoEventManager } from "@/components/po-event-manager";

export default async function ProgramOfficerPage() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "PO") {
    redirect("/");
  }

  return (
    <AppShell title="Program Officer Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Upcoming Events</p>
          <h3 className="mt-2 text-3xl font-bold">08</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Pending Approvals</p>
          <h3 className="mt-2 text-3xl font-bold">06</h3>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Volunteer Hours</p>
          <h3 className="mt-2 text-3xl font-bold">1420</h3>
        </div>
      </div>

      <PoEventManager />
    </AppShell>
  );
}
