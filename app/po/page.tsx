import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";

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

      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h4 className="mb-5 text-xl font-semibold">Create Event</h4>
        <div className="grid gap-3 md:grid-cols-2">
          <input className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white" placeholder="Event title" />
          <input className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white" placeholder="Location" />
          <input type="date" className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white" />
          <input className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white" placeholder="Category" />
        </div>
        <textarea className="mt-3 h-32 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white" placeholder="Event description" />
        <div className="mt-4 flex gap-3">
          <button className="rounded-xl bg-emerald-500 px-4 py-2 font-medium text-white">Post Event</button>
          <button className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-2 font-medium text-white">Send Push</button>
        </div>
      </div>
    </AppShell>
  );
}
