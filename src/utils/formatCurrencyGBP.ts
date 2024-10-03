export const formatCurrencyGBP = (amount: number): string => {
  if (typeof amount !== "number") {
    throw new Error("Invalid argument: amount must be a number");
  }
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
    .format(amount)
    .slice(1);
};
