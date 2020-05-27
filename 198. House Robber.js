/*
198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:
Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
*/

/*
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length < 3) {
    return Math.max(...nums);
  } else {
    for (let i = 2; i < nums.length; i++) {
      if (nums[i - 3] > nums[i - 2]) {
        nums[i] += nums[i - 3];
      } else {
        nums[i] += nums[i - 2];
      }
    }
  }
  return Math.max(...nums);
};

var rob = function (nums) {
  if (nums.length === 0) return 0;
  for (let i = 2; i < nums.length; i++) {
    minusTwo = nums[i - 2];
    minusThree = nums[i - 3];
    if (minusThree === undefined) {
      minusThree = 0;
    }
    nums[i] = Math.max(nums[i] + minusTwo, nums[i] + minusThree);
  }
  return Math.max(...nums);
};

var nums = [6, 6, 4, 8, 4, 3, 3, 10];
//[1,3,1,3,100]
//[2,1,1,2]
//[2,4,8,9,9,3] //19
//[6,3,10,8,2,10,3,5,10,5,3]//39
//Output: 12
rob(nums);
