/*
217. Contains Duplicate
Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.

Example 1:
Input: [1,2,3,1]
Output: true
Example 2:
Input: [1,2,3,4]
Output: false
Example 3:
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
*/
/*
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const arr = new Set(nums);
  if (nums.length !== arr.size) {
    return true;
  } else {
    return false;
  }
};
var arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(arr));



// 44ms
var containsDuplicate = function(nums) {
  return new Set(nums).size < nums.length;
};

// 4400ms
var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) return true 
  }   
  return false
};