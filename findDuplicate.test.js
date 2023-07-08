const findDuplicate = require('./findDuplicate');

describe("findDuplicate", () => {
  test("Example 1: [1,3,4,2,2]", () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2);
  });

  test("Example 2: [3,1,3,4,2]", () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toEqual(3);
  });
});