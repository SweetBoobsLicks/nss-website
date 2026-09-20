import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, body: message, subscriptions } = body ?? {};

    if (!title || !message || !Array.isArray(subscriptions)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    return NextResponse.json({ ok: true, sent: subscriptions.length, title, message });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 500 });
  }
}
