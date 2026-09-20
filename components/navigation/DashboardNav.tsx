import Link from "next/link";

import { BrandMark } from "@/components/ui/BrandMark";

const navConfig: Record<string, { label: string; href: string; secondary?: boolean }[]> = {
  ADMIN: [
    { label: "Home", href: "/admin" },
    { label: "Users", href: "/admin/users" },
    { label: "Sessions", href: "/admin/sessions" },
    { label: "CMS", href: "/admin/cms" },
    { label: "Settings", href: "/admin/settings", secondary: true },
  ],
  PO: [
    { label: "Home", href: "/po" },
    { label: "Events", href: "/po/events" },
    { label: "Attendance", href: "/po/attendance" },
    { label: "Volunteers", href: "/po/volunteers" },
    { label: "Profile", href: "/po/profile", secondary: true },
  ],
  LEADER: [
    { label: "Home", href: "/leader" },
    { label: "Squads", href: "/leader/squads" },
    { label: "Attendance", href: "/leader/attendance" },
    { label: "Tasks", href: "/leader/tasks" },
    { label: "Profile", href: "/leader/profile", secondary: true },
  ],
  VOLUNTEER: [
    { label: "Home", href: "/volunteer" },
    { label: "Events", href: "/volunteer/events" },
    { label: "Attendance", href: "/volunteer/attendance" },
    { label: "Profile", href: "/volunteer/profile" },
  ],
};

export function DashboardNav({ role }: { role: "ADMIN" | "PO" | "LEADER" | "VOLUNTEER" }) {
  const nav = navConfig[role] ?? navConfig.VOLUNTEER;

  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white md:block">
      <div className="border-b border-slate-200 p-4">
        <BrandMark compact showWordmark />
      </div>

      <nav className="space-y-2 p-4">
        {nav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${
              link.secondary
                ? "border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100"
            }`}
          >
            <span>{link.label}</span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-slate-400">→</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
