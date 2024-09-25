import { formatCurrencyGBP } from './formatCurrencyGBP';

describe('formatCurrencyGBP', () => {
  it('should format the currency in GBP with two decimals', () => {
    expect(formatCurrencyGBP(1234.5)).toBe('£1,234.50');
    expect(formatCurrencyGBP(1000)).toBe('£1,000.00');
  });

  it('should throw an error when the argument is not a number', () => {
    expect(() => formatCurrencyGBP('1234' as any)).toThrowError('Invalid argument: amount must be a number');
    expect(() => formatCurrencyGBP(undefined as any)).toThrowError('Invalid argument: amount must be a number');
    expect(() => formatCurrencyGBP(null as any)).toThrowError('Invalid argument: amount must be a number');
  });

  it('should handle zero and negative amounts correctly', () => {
    expect(formatCurrencyGBP(0)).toBe('£0.00');
    expect(formatCurrencyGBP(-1234.56)).toBe('-£1,234.56');
  });
});
