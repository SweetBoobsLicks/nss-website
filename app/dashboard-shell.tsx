import type { ReactNode } from "react";
import { DashboardNav } from "@/components/navigation/DashboardNav";
import { MobileNav } from "@/components/navigation/MobileNav";

export function DashboardShell({
  role,
  children,
}: {
  role: "ADMIN" | "PO" | "LEADER" | "VOLUNTEER";
  children: ReactNode;
}) {
  return (
    <div className="dashboard-shell flex min-h-screen">
      <DashboardNav role={role} />
      <div className="flex-1 pb-20 md:pb-0">
        {children}
      </div>
      <MobileNav role={role} />
    </div>
  );
}
