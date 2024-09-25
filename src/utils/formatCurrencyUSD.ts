export const formatCurrencyUSD = (amount: number): string => {
    if (typeof amount !== 'number') {
        throw new Error('Invalid argument: amount must be a number');
    }
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(amount);
  };
  
  // Example usage
  console.log(formatCurrencyUSD(1234.5)); // "$1,234.50"
  console.log(formatCurrencyUSD(1234));   // "$1,234.00"