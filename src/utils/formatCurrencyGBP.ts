export const formatCurrencyGBP = (amount: number): string => {
  if (typeof amount !== 'number') {
    throw new Error('Invalid argument: amount must be a number');
  }
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amount);
};
  
  // Example usage
  console.log(formatCurrencyGBP(1234.5)); // "£1,234.50"
  console.log(formatCurrencyGBP(1234));   // "£1,234.00"