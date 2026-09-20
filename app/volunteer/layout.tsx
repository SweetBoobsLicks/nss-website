import { DashboardShell } from "@/app/dashboard-shell";

export default function VolunteerLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell role="VOLUNTEER">{children}</DashboardShell>;
}
