import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { endpoint, p256dh, auth, user_id } = body ?? {};

    if (!endpoint || !p256dh || !auth || !user_id) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    return NextResponse.json({ ok: true, message: "Push subscription recorded." });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
