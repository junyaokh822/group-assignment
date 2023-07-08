const findAllDuplicates = require('./findAllDuplicates');

describe('findAllDuplicates', () => {
  test('Example 1: [4, 3, 2, 7, 8, 2, 3, 1]', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1];
    const expectedOutput = [2, 3];
    const result = findAllDuplicates(nums);
    expect(result).toEqual(expectedOutput);
  });

  test('Example 2: [1, 1, 2]', () => {
    const nums = [1, 1, 2];
    const expectedOutput = [1];
    const result = findAllDuplicates(nums);
    expect(result).toEqual(expectedOutput);
  });

  test('Example 3: [1]', () => {
    const nums = [1];
    const expectedOutput = [];
    const result = findAllDuplicates(nums);
    expect(result).toEqual(expectedOutput);
  });
});
