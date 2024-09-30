export const currentDateTime = (): string => {
    const now = new Date();

    // Extracting the time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Options for formatting date part
    const dateOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    // Get the formatted date
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    // Return the formatted date and time string
    return `${hours}:${minutes}:${seconds} ${formattedDate}`;
};

console.log(currentDateTime());