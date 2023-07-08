/*
function findDuplicates(nums):
    duplicates = []  // Initialize an empty array to store the duplicate elements.

    i = 0  // Initialize a variable to keep track of the current index while iterating through the array.
    while i < length(nums):  // Iterate through the array until we reach the end.
        if nums[i] != nums[nums[i] - 1]:  // Check if the current number is not in its correct position.
            swap(nums[i], nums[nums[i] - 1])  // Swap the current number with the number at its correct position.
        else:
            i++  // If the current number is in its correct position, move to the next index.

    for i = 0 to length(nums) - 1:  // Iterate through the array after the cyclic sort.
        if nums[i] != i + 1:  // Check if the number at the current index is not equal to (i + 1).
            duplicates.push(nums[i])  // If it's not equal, it means (i + 1) is a duplicate, so add it to the duplicates array.

    return duplicates  // Return the array of duplicate elements.
*/

function findAllDuplicates(nums) {
    const duplicates = [];  // Initialize an empty array to store the duplicate elements.

    let i = 0;  // Initialize a variable to keep track of the current index while iterating through the array.
    while (i < nums.length) {  // Iterate through the array until we reach the end.
        if (nums[i] !== nums[nums[i] - 1]) {  // Check if the current number is not in its correct position.
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];  // Swap the current number with the number at its correct position.
        } else {
            i++;  // If the current number is in its correct position, move to the next index.
        }
    }

    for (let i = 0; i < nums.length; i++) {  // Iterate through the array after the cyclic sort.
        if (nums[i] !== i + 1) {  // Check if the number at the current index is not equal to (i + 1).
            duplicates.push(nums[i]);  // If it's not equal, it means (i + 1) is a duplicate, so add it to the duplicates array.
        }
    }

    return duplicates;  // Return the array of duplicate elements.
}

module.exports = findAllDuplicates;

/*
[1,1,2]
initialize an array call duplicates that store the duplicates 
i=0
nums[0] === nums[nums[0]-1]
i=1
nums[1] === nums[nums[1]-1]
i=2
nums[2] !== nums[nums[2]-1]=> 2!==1
[nums[nums[2] - 1], nums[2]] = [nums[2], nums[nums[2] - 1]]
[nums[1],nums[2]] = [nums[2],nums[1]]
[1,2,1]

enter the loop
nums[0] ===1
nums[1] ===2
nums[2] !==3
add nums[2] to duplicate array
return [1]

*/