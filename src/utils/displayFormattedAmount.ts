import { formatCurrencyGBP } from "./formatCurrencyGBP";

export const showFormattedAmount = (amount: number): string => {
  try {
    return formatCurrencyGBP(amount);
  } catch (error) {
    return "INVALID AMOUNT TYPE"; // Display "N/A" if there's an error
  }
};
