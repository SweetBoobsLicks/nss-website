import { DashboardShell } from "@/app/dashboard-shell";

export default function LeaderLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell role="LEADER">{children}</DashboardShell>;
}
