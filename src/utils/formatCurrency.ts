export const formatCurrency = (amount: number): string => {
  if (typeof amount !== 'number') {
    throw new Error('Invalid argument: amount must be a number');
  }
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
};
  
  // Example usage
  console.log(formatCurrency(1234.5)); // "£1,234.50"
  console.log(formatCurrency(1234));   // "£1,234.00"