import Link from "next/link";

const items = [
  { label: "Overview", href: "/admin" },
  { label: "Events", href: "/admin" },
  { label: "People", href: "/admin" },
  { label: "Profile", href: "/admin" },
];

export function MobileNav({ active = "/admin" }: { active?: string }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-700 bg-slate-900/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-4 gap-2 px-3 py-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-xl px-2 py-2 text-center text-xs font-medium ${
              active === item.href ? "bg-emerald-500 text-white" : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
