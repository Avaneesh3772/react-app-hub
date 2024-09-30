import { formatDate } from './dateFormat';

describe('formatDate', () => {
  // Test case for valid date string input
  it('should return the formatted date when a valid date string is passed', () => {
    const dateString = '2024-06-21';
    const formattedDate = formatDate(dateString);
    expect(formattedDate).toBe('Jun 21, 2024'); // Expecting the formatted date
  });

  // Test case for non-string argument (TypeError)
  it('should throw an error when the argument is not a string', () => {
    const invalidDate: any = 20240621; // Passing a number instead of a string
    expect(() => formatDate(invalidDate)).toThrowError('Invalid argument: amount must be a string');
  });

  // Test case for invalid date format (Invalid Date)
  it('should return "Invalid Date" for an invalid date string', () => {
    const invalidDateString = 'invalid-date';
    const result = formatDate(invalidDateString);
    expect(result).toBe('Invalid Date');
  });

  // Test case for an empty string
  it('should return "Invalid Date" when an empty string is passed', () => {
    const emptyDateString = '';
    const result = formatDate(emptyDateString);
    expect(result).toBe('Invalid Date');
  });
});
