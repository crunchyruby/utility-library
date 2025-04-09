const truncateString = require('../string_utils/truncateString');

describe('truncateString', () => {
  test('should work correctly', () => {
    // Add your test cases here
    expect(truncateString('test')).toBeDefined();
  });
});