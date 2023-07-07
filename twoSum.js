function twoSum(numbers, target) {
  let i = 0; // Pointer at the beginning of the array
  let j = numbers.length - 1; // Pointer at the end of the array

  while (i < j) { // Iterate until the pointers cross each other
    const sum = numbers[i] + numbers[j]; // Calculate the sum of the current numbers

    if (sum === target) { // Check if the sum equals the target
      return [i + 1, j + 1]; // Return the indices (added by 1) as an array
    } else if (sum < target) { // If the sum is less than the target, move the left pointer to the right
      i++;
    } else { // If the sum is greater than the target, move the right pointer to the left
      j--;
    }
  }

  return []; // If no solution is found, return an empty array
}

module.exports = twoSum;


/*
[2,7,11,15], target = 9
i=0
j=3
0<3
sum=2+15=>17
j--(j=2)
0<2
sum=2+11=>13
j--(j=1)
0<1
2+7===9
i=0+1=>1
j=1+1=>2
return [1,2]


*/
  