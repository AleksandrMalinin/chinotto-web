import { describe, it, expect } from "vitest";
import { parsePublishBody, isValidToken } from "./validate.js";

describe("share validate", () => {
  const token = "550e8400-e29b-41d4-a716-446655440000";
  const html = "<!DOCTYPE html><html><body>hi</body></html>";
  const expiresAt = new Date(Date.now() + 86_400_000).toISOString();

  it("accepts valid publish body", () => {
    const r = parsePublishBody({ token, html, expiresAt });
    expect(r.ok).toBe(true);
  });

  it("rejects bad token", () => {
    const r = parsePublishBody({ token: "nope", html, expiresAt });
    expect(r.ok).toBe(false);
  });

  it("rejects expired expiresAt", () => {
    const r = parsePublishBody({
      token,
      html,
      expiresAt: "2020-01-01T00:00:00Z",
    });
    expect(r.ok).toBe(false);
  });

  it("validates uuid v4", () => {
    expect(isValidToken(token)).toBe(true);
    expect(isValidToken("00000000-0000-4000-8000-000000000000")).toBe(true);
    expect(isValidToken("not-a-uuid")).toBe(false);
  });
});
