import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

const resolveDemoRole = (email: string) => {
  const normalized = email.toLowerCase();

  if (normalized.includes("admin")) return "ADMIN";
  if (normalized.includes("po") || normalized.includes("program")) return "PO";
  if (normalized.includes("leader")) return "LEADER";
  return "VOLUNTEER";
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body ?? {};

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const response = NextResponse.json({ ok: true, user: { email, role: resolveDemoRole(email) } });
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey) {
      try {
        const supabase = await createServerSupabaseClient();
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (!error && data.user) {
          const { data: profileData } = await supabase
            .from("profiles")
            .select("role")
            .eq("id", data.user.id)
            .maybeSingle();

          const role = (profileData?.role as string | undefined) || resolveDemoRole(email);

          response.cookies.set("app_role", role, {
            httpOnly: false,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
          });
          response.cookies.set("app_user_email", email, {
            httpOnly: false,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
          });

          response.headers.set("x-user-role", role);
          return NextResponse.json({ ok: true, user: { email, role } });
        }

        if (error?.status === 400 || error?.message?.toLowerCase().includes("invalid")) {
          return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
        }
      } catch {
        // Fall back to demo mode in local/offline development.
      }
    }

    const role = resolveDemoRole(email);
    response.cookies.set("app_role", role, {
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    response.cookies.set("app_user_email", email, {
      httpOnly: false,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });

    response.headers.set("x-user-role", role);
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
