import { NextResponse } from "next/server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { generateOtp, validateVolunteerRegistration } from "@/lib/lifecycle";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateVolunteerRegistration(body ?? {});

    if (!validation.ok) {
      return NextResponse.json({ error: validation.issues[0] ?? "Please complete all required details" }, { status: 400 });
    }

    const { fullName, rollNumber, email, mobile, password } = validation.data;
    const otp = generateOtp();

    try {
      const supabase = await createServerSupabaseClient();
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            roll_number: rollNumber,
            phone: mobile,
          },
        },
      });

      if (!signUpError && signUpData.user) {
        await supabase.from("profiles").upsert({
          id: signUpData.user.id,
          email,
          full_name: fullName,
          role: "VOLUNTEER",
        });
      }
    } catch {
      // Fall back to local-mode registration flow when the database is not configured.
    }

    const response = NextResponse.json({
      ok: true,
      message: "Volunteer registration accepted. Mobile verification step required before activation.",
      role: "VOLUNTEER",
      requiresOtp: true,
      nextStep: "/volunteer/verify-phone",
      debugOtp: process.env.NODE_ENV !== "production" ? otp : undefined,
    });

    response.cookies.set("volunteer_registration", JSON.stringify({ ...validation.data, otp }), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 10,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
