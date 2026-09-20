export type Role = "ADMIN" | "PO" | "LEADER" | "VOLUNTEER" | "PUBLIC";

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  role: Role;
  created_at: string;
  updated_at: string;
};

export type EventItem = {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  starts_at: string;
  ends_at: string | null;
  published: boolean;
  created_by: string;
  created_at: string;
};

export type RSVP = {
  id: string;
  event_id: string;
  user_id: string;
  status: "ATTENDING" | "MAYBE" | "DECLINED";
  created_at: string;
};

export type PushSubscription = {
  id: string;
  user_id: string;
  endpoint: string;
  p256dh: string;
  auth: string;
  created_at: string;
};
