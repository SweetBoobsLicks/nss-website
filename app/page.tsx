import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Header } from "@/components/layout/Header";

const stats = [
  { label: "Students served", value: "1,200+" },
  { label: "Active volunteers", value: "420" },
  { label: "Events", value: "85+" },
  { label: "Community projects", value: "32" },
];

const activities = [
  "Community Service",
  "Environmental Drives",
  "Blood Donation",
  "Health Awareness",
  "Educational Outreach",
  "Campus Activities",
];

const events = [
  {
    date: "12 Sep 2026",
    title: "Tree Plantation Drive",
    location: "PGGC-46 Campus",
    text: "Join the campus sustainability campaign and help create a greener environment for the college community.",
  },
  {
    date: "21 Sep 2026",
    title: "Cleanliness Awareness Walk",
    location: "Sector 46",
    text: "Lead a community awareness walk focused on cleaner public spaces and responsible citizenship.",
  },
  {
    date: "02 Oct 2026",
    title: "Health Camp Support",
    location: "Community Hall",
    text: "Support volunteers and serve local residents through health-screening and awareness initiatives.",
  },
];

const announcements = [
  {
    title: "NSS camp registration open",
    date: "12 Sep 2026",
    body: "Registrations are now open for the upcoming community outreach and service programme.",
  },
  {
    title: "Volunteer orientation",
    date: "19 Sep 2026",
    body: "All new volunteers must attend the orientation session before participation begins.",
  },
  {
    title: "Blood donation drive",
    date: "24 Sep 2026",
    body: "Support a campus blood donation drive in partnership with the local health authorities.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />

      <section className="nss-hero text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <Badge tone="red" className="mb-5 !bg-white/10 !text-white ring-white/15">Service • Leadership • Community</Badge>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Serve. Lead. Inspire.
            </h1>
            <p className="mt-5 text-lg text-slate-100/90">
              National Service Scheme<br className="hidden sm:block" />
              Post Graduate Government College, Sector 46, Chandigarh
            </p>
            <p className="mt-5 max-w-lg text-base text-slate-100/80">
              Empowering students to contribute meaningfully through service, leadership, social responsibility, and community engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/volunteer/register">
                <Button variant="secondary" size="lg">Join NSS</Button>
              </Link>
              <Link href="#events">
                <Button variant="ghost" size="lg" className="border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/15">
                  Explore events
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                  alt="NSS volunteers in service to the community"
                  className="h-[360px] w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-200">Session</div>
                  <div className="mt-2 text-xl font-black">2026–27</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-3">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-200">Status</div>
                  <div className="mt-2 text-xl font-black text-emerald-300">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card">
              <div className="text-sm text-slate-500">{stat.label}</div>
              <div className="mt-3 text-3xl font-black text-[var(--nss-blue)]">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[var(--nss-shadow)]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Students volunteering and learning together"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Badge tone="blue">About NSS</Badge>
            <h2 className="section-title mt-4">Building a socially responsible campus community.</h2>
            <p className="mt-4 text-base text-slate-600">
              The NSS Wing at PGGC-46 encourages students to engage in meaningful social service, environmental action, and community leadership while developing practical skills for the future.
            </p>
            <p className="mt-3 text-base text-slate-600">
              Through structured volunteering, outreach programmes, awareness campaigns, and active participation, we create opportunities for youth to serve society with responsibility and compassion.
            </p>
            <div className="mt-6">
              <Link href="/login">
                <Button variant="primary">Learn more</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <Badge tone="red">Upcoming activities</Badge>
            <h2 className="section-title mt-3">Upcoming events</h2>
          </div>
          <Link href="/volunteer/events" className="hidden text-sm font-semibold text-[var(--nss-blue)] hover:text-[var(--nss-blue-deep)] sm:inline-flex">
            View all events
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {events.map((event) => (
            <article key={event.title} className="card flex h-full flex-col">
              <div className="mb-4 flex items-center justify-between">
                <Badge tone="amber">{event.date}</Badge>
              </div>
              <h3 className="text-xl font-black text-slate-900">{event.title}</h3>
              <p className="mt-3 text-sm font-medium text-[var(--nss-red)]">{event.location}</p>
              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{event.text}</p>
              <div className="mt-6">
                <Link href="/volunteer/register" className="inline-flex rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700">
                  View event
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="announcements" className="bg-white/90 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge tone="blue">Latest updates</Badge>
          <h2 className="section-title mt-3">Latest announcements</h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {announcements.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--nss-red)]">{item.date}</div>
                <h3 className="mt-3 text-xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
                <div className="mt-5">
                  <button className="text-sm font-semibold text-[var(--nss-blue)] hover:text-[var(--nss-blue-deep)]">Read more</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Badge tone="green">NSS priorities</Badge>
        <h2 className="section-title mt-3">Key areas of engagement</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div key={activity} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--nss-red-soft)] text-lg text-[var(--nss-red)]">✦</div>
              <div className="text-lg font-bold text-slate-900">{activity}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-slate-900 py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge tone="slate" className="!bg-white/10 !text-slate-200 ring-white/10">Our activities</Badge>
          <h2 className="section-title mt-3 text-white">Gallery</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
            ].map((src, index) => (
              <div key={src} className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${index === 1 ? "md:translate-y-8" : ""}`}>
                <img src={src} alt="NSS activity" className="h-72 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-[var(--nss-blue)] px-6 py-10 text-center text-white shadow-[var(--nss-shadow)] sm:px-10">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">Make a difference</div>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Join the PGGC-46 NSS community.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200">
            Volunteer for service, leadership, and campus action that leaves a positive impact on our community and beyond.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/volunteer/register">
              <Button variant="secondary" size="lg">Become a volunteer</Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="text-lg font-black text-[var(--nss-blue)]">PGGC-46 NSS</div>
            <p className="mt-3 text-sm text-slate-600">Post Graduate Government College<br />Sector 46, Chandigarh</p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">Quick links</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><Link href="#events">Events</Link></li>
              <li><Link href="#announcements">Announcements</Link></li>
              <li><Link href="#about">About NSS</Link></li>
              <li><Link href="/volunteer/register">Volunteer Registration</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>admin@nss.pggc46.edu.in</li>
              <li>+91 172 400 2000</li>
              <li>Sector 46, Chandigarh</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">Connect</div>
            <div className="mt-4 flex gap-3 text-sm text-slate-600">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-slate-50 py-4 text-center text-sm text-slate-500">
          © PGGC-46 NSS. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
