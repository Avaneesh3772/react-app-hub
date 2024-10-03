// formatCurrencyGBP.test.ts
import { formatCurrencyGBP } from "./formatCurrencyGBP";

describe("formatCurrencyGBP", () => {
  it("should format a positive number correctly", () => {
    expect(formatCurrencyGBP(1234.56)).toBe("1,234.56");
  });

  it("should format zero correctly", () => {
    expect(formatCurrencyGBP(0)).toBe("0.00");
  });

  it.each([
    ["a string", "1234" as any],
    ["undefined", undefined as any],
    ["null", null as any],
    ["an object", {} as any],
    ["an array", [] as any],
  ])("should throw an error when the argument is %s", (_, input) => {
    expect(() => formatCurrencyGBP(input)).toThrowError(
      "Invalid argument: amount must be a number"
    );
  });
});

/* describe("formatCurrencyGBP", () => {
  describe("error handling", () => {
    const invalidInputs = [
      { input: "1234", description: "string" },
      { input: undefined, description: "undefined" },
      { input: null, description: "null" },
      { input: {}, description: "object" },
      { input: [], description: "array" },
      { input: true, description: "boolean" },
      { input: () => {}, description: "function" },
    ];

    test.each(invalidInputs)(
      "should throw an error when the argument is $description",
      ({ input }) => {
        expect(() => formatCurrencyGBP(input as any)).toThrowError(
          "Invalid argument: amount must be a number"
        );
      }
    );
  });

  describe("formatting", () => {
    const validInputs = [
      { input: 0, expected: "0.00" },
      { input: 1, expected: "1.00" },
      { input: 10, expected: "10.00" },
      { input: 100, expected: "100.00" },
      { input: 1000, expected: "1,000.00" },
      { input: 10000, expected: "10,000.00" },
      { input: 100000, expected: "100,000.00" },
      { input: 1000000, expected: "1,000,000.00" },
      { input: 1.23, expected: "1.23" },
      { input: 1.2, expected: "1.20" },
      { input: 1.234, expected: "1.23" },
      { input: 0.01, expected: "0.01" },
      { input: 0.1, expected: "0.10" },
    ];

    test.each(validInputs)(
      "should format $input to $expected",
      ({ input, expected }) => {
        expect(formatCurrencyGBP(input)).toBe(expected);
      }
    );
  });
}); */
