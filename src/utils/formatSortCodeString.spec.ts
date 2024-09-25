import { formatSortCodeString } from './formatSortCodeString';

describe('formatSortCodeString', () => {
  test('formats a valid 6-digit sort code correctly', () => {
    const result = formatSortCodeString('123456');
    expect(result).toBe('12-34-56');
  });

  test('pads and formats a sort code with less than 6 digits', () => {
    const result = formatSortCodeString('123');
    expect(result).toBe('00-01-23');
  });

  test('throws an error if the argument is not a string', () => {
    expect(() => formatSortCodeString(123456 as any)).toThrow(
      'Invalid argument: sortcode must be a string'
    );
  });

  test('pads a sort code of length 5 with leading zeros', () => {
    const result = formatSortCodeString('12345');
    expect(result).toBe('01-23-45');
  });

  test('formats an empty string to "00-00-00"', () => {
    const result = formatSortCodeString('');
    expect(result).toBe('00-00-00');
  });

  test('pads a sort code of length 1 with leading zeros', () => {
    const result = formatSortCodeString('1');
    expect(result).toBe('00-00-01');
  });
});