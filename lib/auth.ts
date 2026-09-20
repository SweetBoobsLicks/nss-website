import { cookies } from "next/headers";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type AppRole = "ADMIN" | "PO" | "LEADER" | "VOLUNTEER" | "PUBLIC";

const validRoles = new Set<AppRole>(["ADMIN", "PO", "LEADER", "VOLUNTEER", "PUBLIC"]);

export async function getCurrentRole(): Promise<AppRole> {
  const cookieStore = await cookies();
  const roleCookie = cookieStore.get("app_role")?.value;

  if (roleCookie && validRoles.has(roleCookie as AppRole)) {
    return roleCookie as AppRole;
  }

  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return "PUBLIC";
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError || !profile?.role) {
      return "PUBLIC";
    }

    const nextRole = profile.role as AppRole;
    if (!validRoles.has(nextRole)) {
      return "PUBLIC";
    }

    cookieStore.set("app_role", nextRole, {
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    return nextRole;
  } catch {
    return "PUBLIC";
  }
}

export async function requireRole(required: AppRole | AppRole[]) {
  const allowed = Array.isArray(required) ? required : [required];
  const role = await getCurrentRole();

  if (!allowed.includes(role)) {
    throw new Error("Forbidden");
  }

  return role;
}
