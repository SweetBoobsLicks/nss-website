import Link from "next/link";

const items: Record<string, { href: string; label: string }[]> = {
  ADMIN: [
    { href: "/admin", label: "Home" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/sessions", label: "Sessions" },
    { href: "/admin/cms", label: "CMS" },
  ],
  PO: [
    { href: "/po", label: "Home" },
    { href: "/po/events", label: "Events" },
    { href: "/po/attendance", label: "Attendance" },
    { href: "/po/volunteers", label: "Volunteers" },
  ],
  LEADER: [
    { href: "/leader", label: "Home" },
    { href: "/leader/squads", label: "Squad" },
    { href: "/leader/attendance", label: "Attendance" },
    { href: "/leader/tasks", label: "Tasks" },
  ],
  VOLUNTEER: [
    { href: "/volunteer", label: "Home" },
    { href: "/volunteer/events", label: "Events" },
    { href: "/volunteer/attendance", label: "Attendance" },
    { href: "/volunteer/profile", label: "Profile" },
  ],
};

export function MobileNav({ role }: { role: string }) {
  const selectedItems = items[role] ?? items.VOLUNTEER;

  return (
    <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-10px_25px_rgba(15,44,89,0.08)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-4 gap-2">
        {selectedItems.map((item) => {
          const active = item.href === `/${role.toLowerCase()}` || (role === "ADMIN" && item.href === "/admin") || (role === "PO" && item.href === "/po") || (role === "LEADER" && item.href === "/leader") || (role === "VOLUNTEER" && item.href === "/volunteer");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-2 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.1em] ${
                active ? "bg-[var(--nss-blue)] text-white" : "bg-slate-100 text-slate-600"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
