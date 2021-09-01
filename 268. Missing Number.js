/*
268. Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:
Input: [3,0,1]
Output: 2
Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//O(n) time complexity, O(1) space
 var missingNumber = function(nums) {
  let totalSum = 0
  for (let i = 0; i <= nums.length; i++) {
      totalSum += i
  }
  let sumOfNums = nums.reduce((acc, cur) => acc + cur, 0)
  return totalSum - sumOfNums
};


var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  if (nums[0] !== 0) {
    return 0;
  }
  let max = Math.max(...nums),
    sum = 0,
    total = 0;
  for (let i = 0; i <= max; i++) {
    if (nums[i]) {
      sum += nums[i];
    }
    total += i;
  }
  return sum === total ? max + 1 : total - sum;
};

//super slow...
var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] === 1) return 0;
    let tmp = nums[i] + 1;
    if (nums.includes(tmp)) {
      continue;
    } else {
      return tmp;
    }
  }
};
