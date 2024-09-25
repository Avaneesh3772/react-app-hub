# react-app-hub

create a typescript arrow function which takes an currency amount argument as number and returns formatted amount in GBP with decimal

const formatCurrencyGBP = (amount: number): string => {
if (typeof amount !== 'number') {
throw new Error('Invalid argument: amount must be a number');
}
return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(amount);
};

// Example usage
console.log(formatCurrencyGBP(1234.5)); // "£1,234.50"
console.log(formatCurrencyGBP(1234)); // "£1,234.00"

================================

create a typescript arrow function which takes an argument as number and returns formatted currency amount with decimals

const formatCurrency = (amount: number): string => {
if (typeof amount !== 'number') {
throw new Error('Invalid argument: amount must be a number');
}
return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(amount);
};

// Example usage
console.log(formatCurrency(1234.5)); // "$1,234.50" (in the US locale)
console.log(formatCurrency(1234)); // "$1,234.00"

================================
