import test from "node:test";
import assert from "node:assert/strict";
import { resolveCredentialsUser } from "./auth";

test("demo credentials work without a database", async () => {
  const user = await resolveCredentialsUser({
    email: "admin@pggc46.edu.in",
    password: "password123",
  });

  assert.ok(user);
  assert.equal(user?.role, "ADMIN");
  assert.equal(user?.email, "admin@pggc46.edu.in");
});

test("invalid password is rejected", async () => {
  const user = await resolveCredentialsUser({
    email: "volunteer@pggc46.edu.in",
    password: "wrong-password",
  });

  assert.equal(user, null);
});
