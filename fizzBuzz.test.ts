import {describe, it, expect} from 'vitest'
import { fizzBuzz } from './fizzBuzz';

describe("fizzBuzz", () => {
  it("return 'fizz' whenever the value is a multiple of 3", () => {
    expect(fizzBuzz(0)).toMatch("fizz");
    expect(fizzBuzz(3)).toMatch("fizz");
    expect(fizzBuzz(6)).toMatch("fizz");
    expect(fizzBuzz(30)).toMatch("fizz");
  })
  it("return 'Buzz' whenever the value is a multiple of 5", () => {
    expect(fizzBuzz(0)).toMatch("Buzz");
    expect(fizzBuzz(5)).toMatch("Buzz");
    expect(fizzBuzz(10)).toMatch("Buzz");
    expect(fizzBuzz(50)).toMatch("Buzz");
  })
  it("return 'fizzBuzz' whenever the value is a multiple of 3 and 5", () => {
    expect(fizzBuzz(0)).toMatch("fizzBuzz");
    expect(fizzBuzz(15)).toMatch("fizzBuzz");
    expect(fizzBuzz(30)).toMatch("fizzBuzz");
    expect(fizzBuzz(150)).toMatch("fizzBuzz");
  })
  it("return empty string whenever the value is not a multiple of 3 or 5", () => {
    expect(fizzBuzz(1)).toMatch("")
    expect(fizzBuzz(2)).toMatch("");
    expect(fizzBuzz(4)).toMatch("");
    expect(fizzBuzz(40)).toMatch("");
  })
})
