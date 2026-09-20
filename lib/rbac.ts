export const roles = ["ADMIN", "PO", "LEADER", "VOLUNTEER", "PUBLIC"] as const;

export type AppRole = (typeof roles)[number];

export const roleRoutes: Record<AppRole, string[]> = {
  ADMIN: ["/admin"],
  PO: ["/po"],
  LEADER: ["/leader"],
  VOLUNTEER: ["/volunteer"],
  PUBLIC: ["/"],
};

export function getRoleFromCookie(value?: string): AppRole {
  if (!value) return "PUBLIC";
  return roles.includes(value as AppRole) ? (value as AppRole) : "PUBLIC";
}

export function isAllowedForRole(pathname: string, userRole: AppRole): boolean {
  const segment = pathname.split("/")[1];

  if (!segment) return true;

  const mapping: Record<string, AppRole> = {
    admin: "ADMIN",
    po: "PO",
    leader: "LEADER",
    volunteer: "VOLUNTEER",
  };

  const required = mapping[segment] ?? "PUBLIC";
  if (required === "PUBLIC") return true;

  return userRole === "ADMIN" || userRole === required;
}
