export const formatDate = (dateString: string): string => {
    if (typeof dateString !== 'string') {
        throw new Error('Invalid argument: amount must be a string');
    }

    const date = new Date(dateString);
    
    // Get the full month name
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    
    // Format the date using toLocaleDateString with the 'en-US' locale
    return date.toLocaleDateString('en-US', options);
};

console.log(formatDate("2024-06-21")); // Output: June 21, 2024