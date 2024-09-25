import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('should format the currency amount with two decimals and commas for thousands', () => {
    expect(formatCurrency(1234.5)).toBe('1,234.50');
    expect(formatCurrency(1000000)).toBe('1,000,000.00');
    expect(formatCurrency(1000)).toBe('1,000.00');
  });

  it('should handle zero and negative amounts correctly', () => {
    expect(formatCurrency(0)).toBe('0.00');
    expect(formatCurrency(-1234.56)).toBe('-1,234.56');
  });

  it('should throw an error when the argument is not a number', () => {
    expect(() => formatCurrency('1234' as any)).toThrowError('Invalid argument: amount must be a number');
    expect(() => formatCurrency(undefined as any)).toThrowError('Invalid argument: amount must be a number');
    expect(() => formatCurrency(null as any)).toThrowError('Invalid argument: amount must be a number');
    expect(() => formatCurrency({} as any)).toThrowError('Invalid argument: amount must be a number');
    expect(() => formatCurrency([] as any)).toThrowError('Invalid argument: amount must be a number');
  });
});
