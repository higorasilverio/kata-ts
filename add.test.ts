import { describe, it, expect } from "vitest";
import { add } from "./add";

describe("add", () => {
  it("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("returns the single number passed in", () => {
    expect(add("1")).toBe(1);
    expect(add("7")).toBe(7);
  });

  it("should support two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("5,7")).toBe(12);
  });

  it("should allow any number of values separated by either a comma or a newline", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("1\n2,3")).toBe(6);
  });

  it("throws when a negative number is provided", () => {
    expect(() => add("1,-2,3")).toThrow("negatives not allowed: -2");
  });

  it("includes all negative numbers in the error", () => {
    expect(() => add("1,-2,-5,3")).toThrow("negatives not allowed: -2,-5");
  });

  it("numbers greater than 1000 should be ignored", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,2")).toBe(1002);
    expect(add("1,2000,3")).toBe(4);
  });

  it("should identify the new separator and execute the sum correctly", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n2|3|4")).toBe(9);
  });

  it("should identify multi-char separator and execute the sum correctly", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[--]\n5--2--3")).toBe(10);
  });
});
