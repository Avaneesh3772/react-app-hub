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

https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-strings

export const formatCurrency = (amount: number): string => {
if (typeof amount !== 'number') {
throw new Error('Invalid argument: amount must be a number');
}
return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');;
};

================================

https://codedamn.com/news/javascript/format-number-as-currency

================================

Create a typescript arrow function which takes an argument as string such as "2024-06-21" and returns formatted date like Jun 21, 2024

export const formatDate = (dateString: string): string => {
const date = new Date(dateString);

    // Get the full month name
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

    // Format the date using toLocaleDateString with the 'en-US' locale
    return date.toLocaleDateString('en-US', options);

};

console.log(formatDate("2024-06-21")); // Output: June 21, 2024

================================

Write React unit test spec code for below code written in dateFormat.ts file. Throw type error message when argument dateString does not match string type

================================

Create a typescript arrow function which returns formatted current date and time like 15:36:43 Aug 19, 2024
