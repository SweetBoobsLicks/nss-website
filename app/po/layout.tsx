import { DashboardShell } from "@/app/dashboard-shell";

export default function PoLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell role="PO">{children}</DashboardShell>;
}
