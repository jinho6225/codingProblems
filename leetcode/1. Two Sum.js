/*
1. Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let obj = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (!obj.has(diff)) {
      obj.set(nums[i], i);
    } else {
      return [obj.get(diff), i];
    }
  }
};

//Runtime: 52 ms, faster than 92.37% of JavaScript online submissions for Two Sum.
var twoSum = function (nums, target) {
  let newObj = {};
  for (let i = 0; i < nums.length; i++) {
    const gotNum = nums[i];
    const targetNum = target - gotNum;
    if (!newObj.hasOwnProperty(targetNum)) {
      newObj[gotNum] = i;
    } else {
      return [newObj[targetNum], i];
    }
  }
};

//Runtime: 112 ms, faster than 34.39% of JavaScript online submissions for Two Sum.
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//Runtime: 120 ms, faster than 27.40% of JavaScript online submissions for Two Sum.
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (nums.includes(diff, i + 1)) {
      let idx = nums.indexOf(diff, i + 1);
      return [i, idx];
    }
  }
};

var nums = [11, 15, 2, 7];
// var nums = [3,2,4]
// var nums = [3,3]
var target = 9;
twoSum(nums, target);

// 11/14/2020

var twoSum = function(nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i]
      if (diff in obj) {
          return [i, obj[diff]]
      } else {
          obj[nums[i]] = i
      }
  }
  return []
};

/*
define empty object
iterate nums array
define diff variable as target minus current element
check if object has diff property
if yes,
  return array with index and object[diff]
if not
  assign key as current element and value as index
after iteration it's nothing
return empty array
*/