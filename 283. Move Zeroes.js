/*
283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//this is faster code below
//Runtime: 60 ms, faster than 84.19% of JavaScript online submissions for Move Zeroes.
var moveZeroes = function (nums) {
  if (!nums.includes(0)) {
    return nums;
  }
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      total += 1;
    }
  }
  while (total !== 0) {
    let index = nums.indexOf(0);
    nums.splice(index, 1);
    nums.push(0);
    total--;
  }
  return nums;
};

// var moveZeroes = function (nums) {
//   const store = [];
//   while (nums.includes(0)) {
//     const index = nums.indexOf(0);
//     store.push(nums[index]);
//     nums.splice(index, 1);
//   }
//   while (store.length !== 0) {
//     nums.push(store.pop());
//   }
//   return nums;
// };

// 11/14/2020
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
  let i = 0, j = 0
  while (i < nums.length) {
      if(nums[i] === 0) {
          i++
      } else {
          nums[j] = nums[i]
          nums[i] = 0
          j++
          i++
      }
  }
};
//[1,3,12,0,0]
//            |
//        |