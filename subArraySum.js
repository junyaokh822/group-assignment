/*
function subarraySum(nums, k):
    count = 0
    slow = 0
    fast = 0
    sum = 0

    while fast < length of nums do:
        sum += nums[fast]    // Expand the current subarray

        while slow <= fast and sum > k do:
            sum -= nums[slow]    // Shrink the subarray from the left
            slow += 1

        if sum == k then:
            count += 1    // Found a subarray with sum k

        fast += 1    // Move the fast pointer to the next element

    return count

*/

function subarraySum(nums, k) {
    let count = 0;
    let slow = 0;
    let fast = 0;
    let sum = 0;
  
    while (fast < nums.length) {
      sum += nums[fast]; // Expand the current subarray
  
      while (slow <= fast && sum > k) {
        sum -= nums[slow]; // Shrink the subarray from the left
        slow++;
      }
  
      if (sum === k) {
        count++; // Found a subarray with sum k
      }
  
      fast++; // Move the fast pointer to the next element
    }
  
    return count;
  }
module.exports = subarraySum;
  
  /*
  nums = [1, 1, 1], k = 2
  count=0
  slow=0
  fast = 0
  sum = 0
  while(fast(0)<3)
  sum+=1
  sum!>k
  fast=1
  sum+=1 =>sum=2
  sum ===k => count=1
  fast =2
  sum+=1 =>sum=3
  slow <= fast && sum>=k => sum=2 and slow=1
  sum ===k => count =2
  fast =3
  exit the loop
  return count which is 2


  */