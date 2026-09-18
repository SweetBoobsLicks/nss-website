import { MOCK_EVENTS } from "@/lib/mock-data";

export type EventRecord = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  creatorId: string;
  createdAt: string;
};

export const EVENT_STORE: EventRecord[] = [...MOCK_EVENTS.map((event) => ({ ...event }))];

export function listEvents(): EventRecord[] {
  return [...EVENT_STORE];
}

export function createEvent(input: Partial<EventRecord>): EventRecord {
  const title = input.title?.trim();
  const description = input.description?.trim();
  const date = input.date?.trim();
  const location = input.location?.trim();
  const category = input.category?.trim() || "General";

  if (!title || !description || !date || !location) {
    throw new Error("Title, description, date, and location are required.");
  }

  const event: EventRecord = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `evt-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title,
    description,
    date,
    location,
    category,
    creatorId: input.creatorId || "po-demo",
    createdAt: new Date().toISOString(),
  };

  EVENT_STORE.unshift(event);
  return event;
}
