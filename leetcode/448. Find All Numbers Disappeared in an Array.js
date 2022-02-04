/*
448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
  let last = nums.length;
  let arr = [];
  let i = 1;
  while (i <= last) {
    if (!nums.includes(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
};

var findDisappearedNumbers = function (nums) {
  let last = nums.length;
  let set = new Set(nums);
  nums = Array.from(set);
  nums.sort((a, b) => a - b);
  let arr = [];
  for (let i = 1; i <= last; i++) {
    if (!nums.includes(i)) {
      arr.push(i);
    }
  }
  return arr;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }
  let arr = [];
  let len = nums.length;
  for (let i = 1; i <= len; i++) {
    if (!map.hasOwnProperty(String(i))) {
      arr.push(i);
    }
  }
  return arr;
};
