import { hashSync } from "bcryptjs";

export type AppRole = "ADMIN" | "PO" | "LEADER" | "VOLUNTEER";

export const DEMO_USERS = [
  {
    id: "admin-demo",
    name: "Admin User",
    email: "admin@pggc46.edu.in",
    role: "ADMIN" as const,
    passwordHash: hashSync("password123", 10),
  },
  {
    id: "po-demo",
    name: "Program Officer",
    email: "po@pggc46.edu.in",
    role: "PO" as const,
    passwordHash: hashSync("password123", 10),
  },
  {
    id: "leader-demo",
    name: "Leader One",
    email: "leader@pggc46.edu.in",
    role: "LEADER" as const,
    passwordHash: hashSync("password123", 10),
  },
  {
    id: "volunteer-demo",
    name: "Volunteer One",
    email: "volunteer@pggc46.edu.in",
    role: "VOLUNTEER" as const,
    passwordHash: hashSync("password123", 10),
  },
];

export const MOCK_EVENTS = [
  {
    id: "evt-tree-plantation",
    title: "Tree Plantation Drive",
    description: "Campus greenery drive with student volunteers and social awareness outreach.",
    date: "2026-09-25T09:00:00.000Z",
    location: "Sector 46 Park",
    category: "Environment",
    creatorId: "po-demo",
    createdAt: "2026-09-10T08:00:00.000Z",
  },
  {
    id: "evt-swachh-bharat",
    title: "Swachh Bharat Awareness",
    description: "Community cleanliness drive and awareness campaign for local participation.",
    date: "2026-09-30T10:00:00.000Z",
    location: "College Campus",
    category: "Awareness",
    creatorId: "po-demo",
    createdAt: "2026-09-12T12:00:00.000Z",
  },
  {
    id: "evt-blood-drive",
    title: "Blood Donation Camp",
    description: "A campus-wide blood donation initiative in partnership with the district health center.",
    date: "2026-10-08T09:30:00.000Z",
    location: "Main Auditorium",
    category: "Health",
    creatorId: "po-demo",
    createdAt: "2026-09-14T10:00:00.000Z",
  },
];

export const MOCK_DASHBOARD = {
  totalVolunteers: 248,
  activeEvents: 14,
  announcements: 6,
  pendingApprovals: 6,
  volunteerHours: 1420,
  roleBreakdown: {
    ADMIN: 1,
    PO: 3,
    LEADER: 12,
    VOLUNTEER: 233,
  },
  events: MOCK_EVENTS,
};
