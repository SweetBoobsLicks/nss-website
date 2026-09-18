"use client";

import { useEffect, useMemo, useState } from "react";

type EventItem = {
  id: string;
  title: string;
  location: string;
  date: string;
  category: string;
  description: string;
};

export function PoEventManager() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    location: "",
    date: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(Array.isArray(data.events) ? data.events : []);
      } catch {
        setError("Unable to load events right now.");
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const totalUpcoming = useMemo(() => events.length, [events]);

  function handleChange(field: string, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.title || !form.location || !form.date || !form.category || !form.description) {
      setError("Please complete every event field before posting.");
      return;
    }

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to create event.");
      }

      setEvents((current) => [data.event, ...current]);
      setForm({ title: "", location: "", date: "", category: "", description: "" });
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create the event.");
    }
  }

  return (
    <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h4 className="mb-5 text-xl font-semibold">Create Event</h4>
        <form onSubmit={handleSubmit} className="grid gap-3 md:grid-cols-2">
          <input
            className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white"
            placeholder="Event title"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <input
            className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white"
            placeholder="Location"
            value={form.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
          <input
            type="date"
            className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white"
            value={form.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
          <input
            className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white"
            placeholder="Category"
            value={form.category}
            onChange={(e) => handleChange("category", e.target.value)}
          />
          <textarea
            className="md:col-span-2 h-32 w-full rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white"
            placeholder="Event description"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />

          {error ? <p className="md:col-span-2 text-sm text-red-300">{error}</p> : null}

          <div className="md:col-span-2 flex gap-3">
            <button type="submit" className="rounded-xl bg-emerald-500 px-4 py-2 font-medium text-white">
              Post Event
            </button>
            <button type="button" className="rounded-xl border border-slate-600 bg-slate-800 px-4 py-2 font-medium text-white">
              Send Push
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-xl font-semibold">Upcoming Events</h4>
          <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400">
            {loading ? "Loading..." : `${totalUpcoming} scheduled`}
          </span>
        </div>

        <div className="space-y-3">
          {events.map((event) => (
            <div key={event.id} className="rounded-xl border border-slate-700 bg-slate-800 p-4">
              <div className="flex items-center justify-between gap-3">
                <h5 className="font-semibold text-white">{event.title}</h5>
                <span className="rounded-full bg-slate-700 px-2 py-1 text-[10px] uppercase tracking-widest text-slate-200">
                  {event.category}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{event.description}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span>{new Date(event.date).toLocaleDateString()}</span>
                <span>•</span>
                <span>{event.location}</span>
              </div>
            </div>
          ))}

          {!loading && events.length === 0 ? (
            <p className="text-sm text-slate-400">No events yet. Create the first NSS activity.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
