import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { createEvent, listEvents } from "@/lib/event-store";

export async function GET() {
  return NextResponse.json({ events: listEvents() });
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "PO") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();

  try {
    const event = createEvent({
      title: body.title,
      description: body.description,
      date: body.date,
      location: body.location,
      category: body.category,
      creatorId: (session.user as any)?.id ?? "po-demo",
    });

    return NextResponse.json({ ok: true, event }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid payload" },
      { status: 400 }
    );
  }
}
