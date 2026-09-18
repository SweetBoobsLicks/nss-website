import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendPushToSubscription } from "@/lib/notifications";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any)?.role !== "PO") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { title, body, link } = await req.json();

  const subscriptions = await prisma.pushSubscription.findMany({
    select: {
      endpoint: true,
      p256dh: true,
      auth: true,
    },
  });

  const payload = {
    title: title || "New NSS Event",
    body: body || "A new event has been posted.",
    data: {
      url: link || "/volunteer",
    },
  };

  const results = await Promise.all(
    subscriptions.map(
      (sub: { endpoint: string; p256dh: string; auth: string }) =>
        sendPushToSubscription(sub, payload)
    )
  );

  return NextResponse.json({
    ok: true,
    sent: results.length,
  });
}
