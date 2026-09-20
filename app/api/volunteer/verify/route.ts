import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const providedOtp = String(body?.otp ?? "").trim();

    if (!providedOtp) {
      return NextResponse.json({ error: "OTP code is required" }, { status: 400 });
    }

    const cookie = request.headers.get("cookie") ?? "";
    const match = cookie.match(/volunteer_registration=([^;]+)/);
    if (!match) {
      return NextResponse.json({ error: "Registration session expired. Please begin again." }, { status: 400 });
    }

    const decoded = decodeURIComponent(match[1]);
    const registration = JSON.parse(decoded);

    if (providedOtp !== String(registration.otp)) {
      return NextResponse.json({ error: "The OTP you entered is incorrect." }, { status: 400 });
    }

    return NextResponse.json({
      ok: true,
      nextStep: "/volunteer/profile/complete",
      message: "Mobile verification successful.",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
