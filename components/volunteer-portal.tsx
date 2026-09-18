"use client";

import { useEffect, useState } from "react";

type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
};

export function VolunteerPortal() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(Array.isArray(data.events) ? data.events : []);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  function toggleStatus(id: string) {
    setEvents((current) =>
      current.map((event) =>
        event.id === id
          ? {
              ...event,
              title: event.title,
            }
          : event
      )
    );
  }

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h4 className="text-xl font-semibold">Upcoming Events</h4>
        <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-400">
          {loading ? "Loading..." : `${events.length} events`}
        </span>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <div key={event.id} className="rounded-xl border border-slate-700 bg-slate-800 p-4">
            <div className="flex items-center justify-between gap-3">
              <h5 className="font-semibold">{event.title}</h5>
              <button
                type="button"
                onClick={() => toggleStatus(event.id)}
                className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400"
              >
                GOING
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-300">{new Date(event.date).toLocaleDateString()} • {event.location}</p>
            <p className="mt-2 text-sm text-slate-400">{event.description}</p>
          </div>
        ))}

        {!loading && events.length === 0 ? (
          <p className="text-sm text-slate-400">No upcoming NSS events are available yet.</p>
        ) : null}
      </div>
    </div>
  );
}
