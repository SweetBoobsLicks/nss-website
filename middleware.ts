import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getRoleFromCookie, isAllowedForRole } from "@/lib/rbac";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/" ||
    pathname === "/login" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segment = pathname.split("/")[1];
  const protectedSegments = new Set(["admin", "po", "leader", "volunteer"]);

  if (!protectedSegments.has(segment)) {
    return NextResponse.next();
  }

  const role = getRoleFromCookie(request.cookies.get("app_role")?.value);

  if (role === "PUBLIC" || !isAllowedForRole(pathname, role)) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/po/:path*", "/leader/:path*", "/volunteer/:path*"],
};
