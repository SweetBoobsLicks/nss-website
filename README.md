# PGGC-46 NSS Portal

A mobile-first Next.js portal for the National Service Scheme wing of PGGC-46, built with role-based access control, installable PWA behavior, and Vercel-ready configuration.

## Features

- Role-specific dashboards for admin, program officer, leader, and volunteer roles
- Credentials-based authentication with NextAuth
- Protected route gating via middleware
- Event creation and volunteer-facing event feeds
- Push notification support with web-push
- Installable PWA shell with manifest and service worker

## Stack

- Next.js 16
- React 19
- TypeScript
- Prisma + PostgreSQL
- NextAuth
- Tailwind CSS
- next-pwa

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Then open:

- http://localhost:3001

## Demo credentials

- Admin: admin@pggc46.edu.in / password123
- Program Officer: po@pggc46.edu.in / password123
- Leader: leader@pggc46.edu.in / password123
- Volunteer: volunteer@pggc46.edu.in / password123

## Production notes

Set the following in Vercel or your hosting environment:

- DATABASE_URL
- NEXTAUTH_SECRET
- NEXTAUTH_URL
- WEB_PUSH_PUBLIC_KEY
- WEB_PUSH_PRIVATE_KEY
- NEXT_PUBLIC_APP_URL

## Deployment

This app is structured for Vercel deployment with the App Router and PWA settings enabled.
