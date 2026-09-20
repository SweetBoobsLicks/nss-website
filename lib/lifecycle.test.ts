import test from "node:test";
import assert from "node:assert/strict";

import {
  validateVolunteerRegistration,
  validateVolunteerProfile,
  getAcademicSessionWindow,
  getRetentionPurgeDate,
} from "./lifecycle.ts";

test("registration validation rejects invalid PGGC credentials", () => {
  const result = validateVolunteerRegistration({
    fullName: "Amanpreet Kaur",
    rollNumber: "2026-CS-014",
    email: "amanpreet@gmail.com",
    mobile: "9876543210",
    password: "password",
  });

  assert.equal(result.ok, false);
  assert.ok(result.issues.some((issue) => issue.toLowerCase().includes("valid pggc")));
});

test("registration validation accepts valid NSS volunteer data", () => {
  const result = validateVolunteerRegistration({
    fullName: "Amanpreet Kaur",
    rollNumber: "2026-CS-014",
    email: "amanpreet@student.pggc46.edu.in",
    mobile: "9876543210",
    password: "Password@123",
  });

  assert.equal(result.ok, true);
  assert.equal(result.data.mobile, "+919876543210");
});

test("profile validation enforces required completion fields", () => {
  const result = validateVolunteerProfile({
    parentName: "Rajveer Singh",
    address: "Sector 46",
    area: "Chandigarh",
    pinCode: "160047",
    gender: "Female",
    category: "General",
    aadhaar: "123456789012",
    className: "B.Sc. II Year",
  });

  assert.equal(result.ok, true);
  assert.equal(result.data?.className, "B.Sc. II Year");
});

test("academic session and retention dates are deterministic", () => {
  const session = getAcademicSessionWindow(new Date("2026-09-20T00:00:00Z"));
  const purgeDate = getRetentionPurgeDate(new Date("2026-03-31T00:00:00Z"));

  assert.equal(session.key, "2026-2027");
  assert.equal(purgeDate.getFullYear(), 2028);
});
