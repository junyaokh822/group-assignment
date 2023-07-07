const twoSum = require('./twoSum');

describe("twoSum", () => {
  test("Example 1: [2,7,11,15], target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  test("Example 2: [2,3,4], target = 6", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  test("Example 3: [-1,0], target = -1", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });
});
