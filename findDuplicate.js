/*
function findDuplicate(nums):
    // Initialize slow and fast pointers to the first element of the array
    slow = nums[0]
    fast = nums[0]
    
    // Move the pointers until they meet
    while true:
        // Move the slow pointer one step forward
        slow = nums[slow]

        // Move the fast pointer two steps forward
        fast = nums[nums[fast]]

        // Check if the pointers meet at the intersection point
        if slow == fast:
            break

    // Reset the slow pointer to the first element
    slow = nums[0]

    // Move both pointers at the same pace until they meet at the entrance of the cycle (duplicate number)
    while slow != fast:
        // Move the slow pointer one step forward
        slow = nums[slow]

        // Move the fast pointer one step forward
        fast = nums[fast]

    // Return the duplicate number
    return slow

*/




function findDuplicate(nums) {
    let slow = nums[0]; // Initialize slow pointer to the first element of the array
    let fast = nums[0]; // Initialize fast pointer to the first element of the array
    // Move the pointers until they meet
    while (true) {
      slow = nums[slow]; // Move slow pointer one step forward
      fast = nums[nums[fast]]; // Move fast pointer two steps forward
      if (slow === fast) { // Check if the pointers meet at the intersection point
        break; // Break the loop if intersection point is found
      }
    }
    // Move one pointer back to the start while keeping the other at the intersection point
    slow = nums[0]; // Reset the slow pointer to the first element 
    // Move both pointers at the same pace until they meet at the entrance of the cycle (duplicate number)
    while (slow !== fast) {
      slow = nums[slow]; // Move slow pointer one step forward
      fast = nums[fast]; // Move fast pointer one step forward
    }
    return slow; // Return the duplicate number
  }

  
  module.exports = findDuplicate;


  /*
  [1,3,4,2,2] => 2
  slow =nums[0]=1
  fast =nums[0]=1
  loop until two pointers are meet
  slow = nums[1] =3
  fast = nums[nums[1]]=nums[3]=> 2
  slow !==fast, continue loop
  slow =nums[3] =>2
  fast =nums[nums[2]]= nums[4]=>2
  slow ===fast
  break out of loop
  slow= nums[0]=>1
  slow = nums[1]=>3
  fast = nums[2]=>4
  continue loop 
  slow= nums[3]=>2
  fast= nums[4]=>2
  slow ===fast
  break loop
  return slow =>(2)

  
  */