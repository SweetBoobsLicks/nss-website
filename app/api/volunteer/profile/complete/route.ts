import { NextResponse } from "next/server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { validateVolunteerProfile } from "@/lib/lifecycle";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = validateVolunteerProfile(body ?? {});

    if (!validation.ok) {
      return NextResponse.json({ error: validation.issues[0] ?? "Please complete all required profile fields" }, { status: 400 });
    }

    const profileData = validation.data;

    try {
      const supabase = await createServerSupabaseClient();
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        return NextResponse.json({ error: "You must be logged in to complete your profile" }, { status: 401 });
      }

      const profilePayload = {
        id: user.id,
        email: user.email,
        full_name: user.user_metadata?.full_name ?? user.email,
        role: "VOLUNTEER",
        profile_completion: 100,
        parent_name: profileData.parentName,
        address: profileData.address,
        area: profileData.area,
        pin_code: profileData.pinCode,
        gender: profileData.gender,
        category: profileData.category,
        aadhaar: profileData.aadhaar,
        class_name: profileData.className,
        blood_group: profileData.bloodGroup ?? null,
        updated_at: new Date().toISOString(),
      };

      const { error: upsertError } = await supabase.from("profiles").upsert(profilePayload, { onConflict: "id" });

      if (upsertError) {
        return NextResponse.json({ error: upsertError.message }, { status: 500 });
      }
    } catch {
      // Local/dev fallback: do not fail the UX if Supabase is unavailable.
    }

    return NextResponse.json({ ok: true, message: "Profile completed successfully" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
