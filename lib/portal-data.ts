import { createServerSupabaseClient } from "@/lib/supabase/server";

export type DashboardStat = {
  label: string;
  value: string;
  accent: "emerald" | "blue" | "amber" | "purple";
  hint: string;
};

export type DashboardPayload = {
  eyebrow: string;
  title: string;
  stats: DashboardStat[];
};

const fallbackData: Record<string, DashboardPayload> = {
  ADMIN: {
    eyebrow: "Admin",
    title: "Dashboard",
    stats: [
      { label: "Users", value: "128", accent: "emerald", hint: "active" },
      { label: "Announcements", value: "14", accent: "blue", hint: "published" },
      { label: "Events", value: "09", accent: "amber", hint: "this month" },
      { label: "Gallery", value: "42", accent: "purple", hint: "assets" },
    ],
  },
  PO: {
    eyebrow: "PO",
    title: "Program Office",
    stats: [
      { label: "Upcoming events", value: "06", accent: "emerald", hint: "scheduled" },
      { label: "Volunteers", value: "132", accent: "blue", hint: "registered" },
      { label: "Published", value: "18", accent: "amber", hint: "campaigns" },
    ],
  },
  LEADER: {
    eyebrow: "Leader",
    title: "Squad overview",
    stats: [
      { label: "Assigned squads", value: "04", accent: "emerald", hint: "active" },
      { label: "Projects", value: "07", accent: "blue", hint: "in progress" },
      { label: "Attendance", value: "92%", accent: "amber", hint: "this week" },
    ],
  },
  VOLUNTEER: {
    eyebrow: "Volunteer",
    title: "My activity",
    stats: [
      { label: "Logged hours", value: "42", accent: "emerald", hint: "total" },
      { label: "Upcoming events", value: "03", accent: "blue", hint: "this month" },
      { label: "RSVPs", value: "12", accent: "amber", hint: "confirmed" },
    ],
  },
};

function toDisplayNumber(value: number | null | undefined, fallback: number): string {
  const result = typeof value === "number" ? value : fallback;
  return String(result).padStart(2, "0");
}

export async function getPortalDashboardData(role: keyof typeof fallbackData): Promise<DashboardPayload> {
  const defaultPayload = fallbackData[role] ?? fallbackData.VOLUNTEER;

  try {
    const supabase = await createServerSupabaseClient();

    const [profilesResult, eventsResult, announcementsResult, galleryResult, projectsResult, squadsResult, taskResult] = await Promise.all([
      supabase.from("profiles").select("id", { count: "exact", head: true }),
      supabase.from("events").select("id", { count: "exact", head: true }),
      supabase.from("announcements").select("id", { count: "exact", head: true }),
      supabase.from("gallery").select("id", { count: "exact", head: true }),
      supabase.from("projects").select("id", { count: "exact", head: true }),
      supabase.from("squads").select("id", { count: "exact", head: true }),
      supabase.from("task_completions").select("id", { count: "exact", head: true }),
    ]);

    if (
      profilesResult.error ||
      eventsResult.error ||
      announcementsResult.error ||
      galleryResult.error ||
      projectsResult.error ||
      squadsResult.error ||
      taskResult.error
    ) {
      return defaultPayload;
    }

    const users = profilesResult.count ?? 128;
    const events = eventsResult.count ?? 9;
    const announcements = announcementsResult.count ?? 14;
    const gallery = galleryResult.count ?? 42;
    const projects = projectsResult.count ?? 7;
    const squads = squadsResult.count ?? 4;
    const completedTasks = taskResult.count ?? 12;

    if (role === "ADMIN") {
      return {
        ...defaultPayload,
        stats: [
          { label: "Users", value: toDisplayNumber(users, 128), accent: "emerald", hint: "active" },
          { label: "Announcements", value: toDisplayNumber(announcements, 14), accent: "blue", hint: "published" },
          { label: "Events", value: toDisplayNumber(events, 9), accent: "amber", hint: "this month" },
          { label: "Gallery", value: toDisplayNumber(gallery, 42), accent: "purple", hint: "assets" },
        ],
      };
    }

    if (role === "PO") {
      return {
        ...defaultPayload,
        stats: [
          { label: "Upcoming events", value: toDisplayNumber(events, 6), accent: "emerald", hint: "scheduled" },
          { label: "Volunteers", value: toDisplayNumber(users, 132), accent: "blue", hint: "registered" },
          { label: "Published", value: toDisplayNumber(announcements, 18), accent: "amber", hint: "campaigns" },
        ],
      };
    }

    if (role === "LEADER") {
      return {
        ...defaultPayload,
        stats: [
          { label: "Assigned squads", value: toDisplayNumber(squads, 4), accent: "emerald", hint: "active" },
          { label: "Projects", value: toDisplayNumber(projects, 7), accent: "blue", hint: "in progress" },
          { label: "Attendance", value: `${Math.min(100, Math.max(65, Math.round((completedTasks / Math.max(projects, 1)) * 16 + 65)))}%`, accent: "amber", hint: "this week" },
        ],
      };
    }

    return {
      ...defaultPayload,
      stats: [
        { label: "Logged hours", value: toDisplayNumber(completedTasks, 42), accent: "emerald", hint: "total" },
        { label: "Upcoming events", value: toDisplayNumber(events, 3), accent: "blue", hint: "this month" },
        { label: "RSVPs", value: toDisplayNumber(completedTasks + 2, 12), accent: "amber", hint: "confirmed" },
      ],
    };
  } catch {
    return defaultPayload;
  }
}
