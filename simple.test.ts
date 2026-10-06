import { describe, expect, it } from "vitest";

describe("environment", () => {
  it("works", () => {
    expect(true).toBe(true);
  });
});

describe("environment fail", () => {
  it("does not work", () => {
    expect(false).toBe(true);
  })
})
