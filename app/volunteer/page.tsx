import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { AppShell } from "@/components/app-shell";
import { VolunteerPortal } from "@/components/volunteer-portal";

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

      <VolunteerPortal />
    </AppShell>
  );
}
