import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { DEMO_USERS } from "@/lib/mock-data";
import { prisma } from "@/lib/prisma";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "PO" | "LEADER" | "VOLUNTEER";
};

export async function resolveCredentialsUser(credentials: {
  email?: string;
  password?: string;
}): Promise<AuthUser | null> {
  const email = credentials.email?.trim().toLowerCase();
  const password = credentials.password;

  if (!email || !password) return null;

  const demoUser = DEMO_USERS.find((user) => user.email.toLowerCase() === email);

  if (demoUser) {
    const valid = await compare(password, demoUser.passwordHash);
    if (valid) {
      return {
        id: demoUser.id,
        name: demoUser.name,
        email: demoUser.email,
        role: demoUser.role,
      };
    }
    return null;
  }

  if (!process.env.DATABASE_URL) return null;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.passwordHash) return null;

    const valid = await compare(password, user.passwordHash);
    if (!valid) return null;

    return {
      id: user.id,
      name: user.name ?? user.email ?? "NSS User",
      email: user.email ?? email,
      role: (user.role as AuthUser["role"]) ?? "VOLUNTEER",
    };
  } catch {
    return null;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: process.env.DATABASE_URL ? PrismaAdapter(prisma) : undefined,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await resolveCredentialsUser(credentials ?? {});
        return user ?? null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role ?? "VOLUNTEER";
        token.id = (user as any).id ?? token.sub;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
