export const ACCEPTED_EMAIL_DOMAINS = ["@pggc46.edu.in", "@student.pggc46.edu.in"];

export const REQUIRED_PROFILE_FIELDS = [
  "parentName",
  "address",
  "area",
  "pinCode",
  "gender",
  "category",
  "aadhaar",
  "className",
] as const;

export const RETENTION_MONTHS = 24;

export function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return `+91${digits}`;
  if (digits.length === 12 && digits.startsWith("91")) return `+${digits}`;
  if (digits.length > 10) return `+${digits}`;
  return value.trim();
}

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
  return ACCEPTED_EMAIL_DOMAINS.some((domain) => email.toLowerCase().endsWith(domain));
}

export function isStrongPassword(value: string): boolean {
  return value.length >= 8 && /[A-Z]/.test(value) && /[a-z]/.test(value) && /\d/.test(value);
}

export function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export type VolunteerRegistrationValidation =
  | {
      ok: true;
      issues: [];
      data: {
        fullName: string;
        rollNumber: string;
        email: string;
        mobile: string;
        password: string;
      };
    }
  | {
      ok: false;
      issues: string[];
      data: undefined;
    };

export type VolunteerProfileValidation =
  | {
      ok: true;
      issues: undefined;
      data: {
        parentName: string;
        address: string;
        area: string;
        pinCode: string;
        gender: string;
        category: string;
        aadhaar: string;
        className: string;
        bloodGroup: string;
      };
    }
  | {
      ok: false;
      issues: string[];
      data: undefined;
    };

export function validateVolunteerRegistration(input: Record<string, unknown>): VolunteerRegistrationValidation {
  const fullName = String(input.fullName ?? "").trim();
  const rollNumber = String(input.rollNumber ?? "").trim();
  const email = String(input.email ?? "").trim();
  const rawMobile = String(input.mobile ?? "").trim();
  const password = String(input.password ?? "");

  const issues: string[] = [];

  if (!fullName) issues.push("Full name is required");
  if (!rollNumber) issues.push("College roll number is required");
  if (!email || !isValidEmail(email)) issues.push("Use a valid PGGC-46 email address");

  const mobile = normalizePhone(rawMobile);
  if (!mobile || !mobile.startsWith("+")) issues.push("Valid mobile number is required");

  if (!isStrongPassword(password)) {
    issues.push("Password must be at least 8 characters and include uppercase, lowercase, and a number");
  }

  if (issues.length > 0) {
    return {
      ok: false,
      issues,
      data: undefined,
    };
  }

  return {
    ok: true,
    issues: [],
    data: {
      fullName,
      rollNumber,
      email: email.toLowerCase(),
      mobile,
      password,
    },
  };
}

export function validateVolunteerProfile(input: Record<string, unknown>): VolunteerProfileValidation {
  const missing = REQUIRED_PROFILE_FIELDS.filter((field) => {
    const value = String((input as Record<string, unknown>)[field] ?? "").trim();
    return value.length === 0;
  });

  if (missing.length > 0) {
    return {
      ok: false,
      issues: missing.map((field) => `${field} is required`),
      data: undefined,
    };
  }

  return {
    ok: true,
    issues: undefined,
    data: {
      parentName: String(input.parentName ?? "").trim(),
      address: String(input.address ?? "").trim(),
      area: String(input.area ?? "").trim(),
      pinCode: String(input.pinCode ?? "").trim(),
      gender: String(input.gender ?? "").trim(),
      category: String(input.category ?? "").trim(),
      aadhaar: String(input.aadhaar ?? "").trim(),
      className: String(input.className ?? "").trim(),
      bloodGroup: String(input.bloodGroup ?? "").trim(),
    },
  };
}

export function getAcademicSessionWindow(referenceDate = new Date()) {
  const currentYear = referenceDate.getFullYear();
  const startMonth = referenceDate.getMonth() + 1; // 1-based month
  const currentAcademicYear = startMonth <= 6 ? currentYear - 1 : currentYear;
  const nextAcademicYear = currentAcademicYear + 1;

  return {
    key: `${currentAcademicYear}-${nextAcademicYear}`,
    start: new Date(currentAcademicYear, 6, 1),
    end: new Date(nextAcademicYear, 2, 31),
  };
}

export function getRetentionPurgeDate(endDate: Date | string) {
  const resolved = new Date(endDate);
  resolved.setFullYear(resolved.getFullYear() + 2);
  return resolved;
}
