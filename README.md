# PGGC-46 NSS Portal

A production-ready, mobile-first portal for the NSS Wing of PGGC-46, Sector 46, Chandigarh, built with Next.js App Router, TypeScript, Tailwind, Supabase, and PWA-ready browser notifications.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Supabase Auth + PostgreSQL + Storage + Realtime
- Web Push API
- Vercel deployment

## Roles

- ADMIN
- PO
- LEADER
- VOLUNTEER

## Local setup

1. Create a Supabase project.
2. Add environment variables in `.env.local`.
3. Install dependencies:

```bash
npm install
```

4. Start the dev server:

```bash
npm run dev
```

5. Open `http://localhost:3001`.

## Required env vars

```bash
NEXT_PUBLIC_SUPABASE_URL="https://<project>.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="<anon-key>"
NEXT_PUBLIC_APP_URL="http://localhost:3001"
NEXT_PUBLIC_VAPID_PUBLIC_KEY="<vapid-public-key>"
VAPID_PRIVATE_KEY="<vapid-private-key>"
```

## Notes

- The app uses Supabase directly and avoids Prisma, Drizzle, and NextAuth.
- The current project is scaffolded as a production-ready app shell with role-based dashboard routing and push APIs.
