import { formatSortCodeString } from './formatSortCodeString';

describe('formatSortCodeString', () => {
  // Test for valid sort code input
  it('should format a valid 6-digit sort code correctly', () => {
    const input = '123456';
    const result = formatSortCodeString(input);
    expect(result).toBe('12-34-56');
  });

  // Test for sort code input with fewer than 6 digits
  it('should pad the sort code and format it correctly if less than 6 digits', () => {
    const input = '123';
    const result = formatSortCodeString(input);
    expect(result).toBe('00-01-23');
  });

  // Test for empty input
  it('should format empty string input as 00-00-00', () => {
    const input = '';
    const result = formatSortCodeString(input);
    expect(result).toBe('00-00-00');
  });

  // Test for non-string input
  it('should return "Invalid input type" for non-string input', () => {
    const input = 123456; // number input instead of string
    const result = formatSortCodeString(input as any); // cast to any to bypass TypeScript type check
    expect(result).toBe('Invalid input type');
  });

  // Test for alphanumeric input
  it('should format alphanumeric input as per string handling', () => {
    const input = '12A456';
    const result = formatSortCodeString(input);
    expect(result).toBe('12-A4-56');
  });

  // Test for null input
  it('should return "Invalid input type" for null input', () => {
    const input = null;
    const result = formatSortCodeString(input as any);
    expect(result).toBe('Invalid input type');
  });
  
  // Test for undefined input
  it('should return "Invalid input type" for undefined input', () => {
    const input = undefined;
    const result = formatSortCodeString(input as any);
    expect(result).toBe('Invalid input type');
  });
});
