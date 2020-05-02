/*
349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let result = []
  if (nums1.length < nums2.length) {
    for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
        result.push(nums1[i])
      }
    }
  } else {
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) {
        result.push(nums2[i])
      }
    }
  }
  result = new Set(result)
  return Array.from(result)
};

var nums1 = [1,2,2,1]
var nums2 = [2,2]

intersection(nums1, nums2)
