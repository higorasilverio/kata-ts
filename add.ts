export function add(numberString: string): number {
  let delimiter = ",";
  let numbersInput = numberString;

  if (numberString.startsWith("//")) {
    const headerEnd = numberString.indexOf("\n");
    const header = numberString.substring(2, headerEnd);

    delimiter = header.startsWith("[")
      ? header.substring(1, header.length - 1)
      : header;

    numbersInput = numberString.substring(headerEnd + 1);
  }

  const normalizedString = numbersInput.replaceAll("\n", delimiter);
  const numberStrings = normalizedString.split(delimiter);
  const numbers = numberStrings.map(Number);

  const negativeNumbers = numbers.filter((number) => number < 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(",")}`);
  }

  const validNumbers = numbers.filter((number) => number <= 1000);

  return validNumbers.reduce((sum, number) => sum + number, 0);
}
