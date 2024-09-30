import { currentDateTime } from './currentDateTime';

// Mock the Date object to ensure a consistent time for testing
describe('currentDateTime', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    // Set a fixed time for testing: Aug 19, 2024, 15:36:43
    jest.setSystemTime(new Date('2024-08-19T15:36:43'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return the current time and date formatted as "HH:MM:SS MMM DD, YYYY"', () => {
    const expectedOutput = '15:36:43 Aug 19, 2024';
    const result = currentDateTime();
    expect(result).toBe(expectedOutput);
  });
});
