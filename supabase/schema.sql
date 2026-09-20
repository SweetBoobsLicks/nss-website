create extension if not exists pgcrypto;

create type public.app_role as enum ('ADMIN', 'PO', 'LEADER', 'VOLUNTEER');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  full_name text,
  avatar_url text,
  role public.app_role not null default 'VOLUNTEER',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  location text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  published boolean not null default false,
  created_by uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  status text not null default 'ATTENDING' check (status in ('ATTENDING', 'MAYBE', 'DECLINED')),
  created_at timestamptz not null default now(),
  unique(event_id, user_id)
);

create table public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  endpoint text not null,
  p256dh text not null,
  auth text not null,
  created_at timestamptz not null default now(),
  unique(endpoint)
);

create table public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  body text not null,
  is_published boolean not null default false,
  created_by uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.gallery (
  id uuid primary key default gen_random_uuid(),
  title text,
  image_url text not null,
  caption text,
  created_by uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  leader_id uuid references public.profiles(id) on delete set null,
  status text not null default 'ACTIVE' check (status in ('ACTIVE', 'PAUSED', 'COMPLETED')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.squads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  leader_id uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table public.squad_members (
  id uuid primary key default gen_random_uuid(),
  squad_id uuid not null references public.squads(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(squad_id, user_id)
);

create table public.task_completions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  project_id uuid not null references public.projects(id) on delete cascade,
  task_name text not null,
  completed boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  unique(user_id, project_id, task_name)
);

create index idx_profiles_role on public.profiles(role);
create index idx_events_published on public.events(published, starts_at);
create index idx_events_created_by on public.events(created_by);
create index idx_rsvps_event on public.rsvps(event_id);
create index idx_rsvps_user on public.rsvps(user_id);
create index idx_push_subscriptions_user on public.push_subscriptions(user_id);
create index idx_announcements_published on public.announcements(is_published, created_at);
create index idx_gallery_created_by on public.gallery(created_by);
create index idx_projects_leader on public.projects(leader_id);
create index idx_squad_members_squad on public.squad_members(squad_id);
create index idx_task_completions_user on public.task_completions(user_id);

alter table public.profiles enable row level security;
alter table public.events enable row level security;
alter table public.rsvps enable row level security;
alter table public.push_subscriptions enable row level security;
alter table public.announcements enable row level security;
alter table public.gallery enable row level security;
alter table public.projects enable row level security;
alter table public.squads enable row level security;
alter table public.squad_members enable row level security;
alter table public.task_completions enable row level security;

create policy "Public can view published events" on public.events for select using (published = true);
create policy "Public can view published announcements" on public.announcements for select using (is_published = true);
create policy "Users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Admins manage all profiles" on public.profiles for all using ((select role from public.profiles where id = auth.uid()) = 'ADMIN') with check ((select role from public.profiles where id = auth.uid()) = 'ADMIN');
create policy "POs and admins manage events" on public.events for all using (
  (select role from public.profiles where id = auth.uid()) in ('ADMIN', 'PO')
) with check ((select role from public.profiles where id = auth.uid()) in ('ADMIN', 'PO'));
create policy "Users can manage own RSVPs" on public.rsvps for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Volunteers can read own push subscriptions" on public.push_subscriptions for select using (auth.uid() = user_id);
create policy "Users can manage own push subscriptions" on public.push_subscriptions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Admins manage announcements" on public.announcements for all using ((select role from public.profiles where id = auth.uid()) = 'ADMIN') with check ((select role from public.profiles where id = auth.uid()) = 'ADMIN');
create policy "Admins manage gallery" on public.gallery for all using ((select role from public.profiles where id = auth.uid()) = 'ADMIN') with check ((select role from public.profiles where id = auth.uid()) = 'ADMIN');
create policy "Admins and leaders manage project/squad data" on public.projects for all using ((select role from public.profiles where id = auth.uid()) in ('ADMIN', 'LEADER')) with check ((select role from public.profiles where id = auth.uid()) in ('ADMIN', 'LEADER'));
create policy "Admins and leaders manage squad memberships" on public.squad_members for all using ((select role from public.profiles where id = auth.uid()) in ('ADMIN', 'LEADER')) with check ((select role from public.profiles where id = auth.uid()) in ('ADMIN', 'LEADER'));
create policy "Users can view assigned tasks" on public.task_completions for select using (auth.uid() = user_id or (select role from public.profiles where id = auth.uid()) in ('ADMIN', 'LEADER'));
create policy "Leaders can update task completions" on public.task_completions for update using ((select role from public.profiles where id = auth.uid()) in ('ADMIN', 'LEADER')) with check ((select role from public.profiles where id = auth.uid()) in ('ADMIN', 'LEADER'));

create trigger update_profiles_updated_at
before update on public.profiles
for each row execute procedure moddatetime(updated_at);

create trigger update_events_updated_at
before update on public.events
for each row execute procedure moddatetime(updated_at);

create trigger update_announcements_updated_at
before update on public.announcements
for each row execute procedure moddatetime(updated_at);

create trigger update_projects_updated_at
before update on public.projects
for each row execute procedure moddatetime(updated_at);
