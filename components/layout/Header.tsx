import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <BrandMark compact showWordmark />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="#about" className="transition hover:text-[var(--nss-blue)]">About NSS</Link>
          <Link href="#events" className="transition hover:text-[var(--nss-blue)]">Events</Link>
          <Link href="#announcements" className="transition hover:text-[var(--nss-blue)]">Announcements</Link>
          <Link href="#gallery" className="transition hover:text-[var(--nss-blue)]">Gallery</Link>
          <Link href="#contact" className="transition hover:text-[var(--nss-blue)]">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden rounded-xl border border-slate-200 px-3.5 py-2 text-sm font-semibold text-slate-700 transition hover:border-[var(--nss-blue)] hover:text-[var(--nss-blue)] sm:inline-flex">
            Login
          </Link>
          <Link href="/volunteer/register" className="hidden sm:inline-flex">
            <Button variant="primary" size="md">Join NSS</Button>
          </Link>
          <Link href="/volunteer/register" className="sm:hidden">
            <Button variant="primary" size="sm">Join</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
