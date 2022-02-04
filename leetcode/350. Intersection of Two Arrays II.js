/*
350. Intersection of Two Arrays II

Given two arrays, write a function to compute their intersection.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:
What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
*/

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = []
    let newArr = nums2.slice()
    for (let i = 0; i < nums2.length; i++) {
      if (nums1.includes(nums2[i])) {
        result.push(nums2[i])
        let idx1 = nums1.indexOf(nums2[i])
        let idx2 = nums2.indexOf(nums2[i])
        nums1.splice(idx1,1)
        newArr.splice(idx2,1)
        if (newArr.length === 0) {
          return result
        }
      }
    }
  return result
};

//alternative

var intersect = function(nums1, nums2) {
  let map = new Map()
  for (let i = 0; i < nums1.length; i++) {
      if (map.has(nums1[i])) {
          map.set(nums1[i], map.get(nums1[i]) + 1)
      } else {
          map.set(nums1[i], 1)
      }
  }
  let result = [];
  for (let n of nums2) {
      if (map.has(n) && map.get(n) > 0) {
          result.push(n)
          map.set(n, map.get(n) - 1);
      }
  }
  return result
};

var nums1 = [4,9,5]
var nums2 = [9,4,9,8,4]
// [1,2,2,1]
// [2]
intersect(nums1, nums2)


/*
11/14/2020
time O(n)
space O(n)
 */
var intersect = function(nums1, nums2) {
  let result = []
  let obj = {}
  for (let i = 0; i < nums1.length; i++) {
      if (nums1[i] in obj) {
          obj[nums1[i]] += 1
      } else {
          obj[nums1[i]] = 1
      }
  }
  for (let i = 0; i < nums2.length; i++) {
      if (nums2[i] in obj) {
          result.push(nums2[i])
          if (obj[nums2[i]] > 1) {
              obj[nums2[i]] -= 1
          } else {
              delete obj[nums2[i]]
          }
      }
  }
  return result
};