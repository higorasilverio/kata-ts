export function fizzBuzz(value: unknown): string {
  if (Number.isNaN(value)) return "";

  const isMultipleOfThree = Number(value) % 3 === 0;
  const isMultipleOfFive = Number(value) % 5 === 0;
  const isMultipleOfBoth = isMultipleOfThree && isMultipleOfFive;

  if (isMultipleOfBoth) return "fizzBuzz";
  if (isMultipleOfThree) return "fizz";
  if (isMultipleOfFive) return "Buzz";
  return "";
}
