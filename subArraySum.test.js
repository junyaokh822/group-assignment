const subarraySum = require('./subArraySum'); // Assuming the code is in a separate file called subarraySum.js

describe('subarraySum', () => {
  test('should return the correct number of subarrays with sum 2', () => {
    const nums = [1, 1, 1];
    const k = 2;
    const result = subarraySum(nums, k);
    expect(result).toBe(2);
  });

  test('should return the correct number of subarrays with sum 3', () => {
    const nums = [1, 2, 3];
    const k = 3;
    const result = subarraySum(nums, k);
    expect(result).toBe(2);
  });
});
