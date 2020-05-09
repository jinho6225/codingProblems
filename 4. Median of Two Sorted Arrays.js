/*
4. Median of Two Sorted Arrays
Hard

There are two sorted arrays nums1 and nums2 of size m and n respectively.
Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
You may assume nums1 and nums2 cannot be both empty.

Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length === 0) {
    if (nums2.length % 2 === 1) {
      let idx = Math.floor(nums2.length / 2);
      return nums2[idx];
    } else {
      let idx = Math.floor(nums2.length / 2);
      return (nums2[idx - 1] + nums2[idx]) / 2;
    }
  } else if (nums2.length === 0) {
    if (nums1.length % 2 === 1) {
      let idx = Math.floor(nums1.length / 2);
      return nums1[idx];
    } else {
      let idx = Math.floor(nums1.length / 2);
      return (nums1[idx - 1] + nums1[idx]) / 2;
    }
  } else {
    let lengthSum = nums1.length + nums2.length;
    let mid;
    if (lengthSum % 2 === 1) {
      mid = Math.floor(lengthSum / 2);

      while (mid !== 0) {
        if (nums1.length !== 0 && nums2.length !== 0) {
          if (nums1[0] >= nums2[0]) {
            nums2.shift();
          } else {
            nums1.shift();
          }
          mid--;
        } else {
          if (nums1.length === 0) {
            store = nums2.shift();
          } else {
            store = nums1.shift();
          }
          mid--;
        }
      }
      if (nums1.length !== 0 && nums2.length !== 0) {
        if (nums1[0] < nums2[0]) {
          return nums1[0];
        } else {
          return nums2[0];
        }
      } else {
        if (nums1.length === 0) {
          return nums2[0];
        } else {
          return nums1[0];
        }
      }
    } else {
      mid = lengthSum / 2;
      let store;
      while (mid !== 0) {
        if (nums1.length !== 0 && nums2.length !== 0) {
          if (nums1[0] >= nums2[0]) {
            store = nums2.shift();
          } else {
            store = nums1.shift();
          }
          mid--;
        } else {
          if (nums1.length === 0) {
            store = nums2.shift();
          } else {
            store = nums1.shift();
          }
          mid--;
        }
      }
      if (nums1.length !== 0 && nums2.length !== 0) {
        if (nums1[0] < nums2[0]) {
          return (nums1[0] + store) / 2;
        } else {
          return (nums2[0] + store) / 2;
        }
      } else {
        if (nums1.length === 0) {
          return (nums2[0] + store) / 2;
        } else {
          return (nums1[0] + store) / 2;
        }
      }
    }
  }
};

// var nums1 = [1, 3]
// var nums2 = [2]
// The median is 2.0

// var nums1 = [1, 2]
// var nums2 = [3, 4]
// var nums1 = [1, 3]
// var nums2 = [2, 4]

// var nums1 = [1]
// var nums2 = [2,3,4]

var nums1 = [1];
var nums2 = [2, 3, 4, 5];
// var nums1 = [1]
// var nums2 = [2,3]
// var nums1 = [2,2,2,2]
// var nums2 = [2,2,2]
// var nums1 = [0,0]
// var nums2 = [0,0]

// var nums1 = [1]
// var nums2 = [1]

// var nums1 = [2,3]
// var nums2 = [2,2]
// The median is (2 + 3)/2 = 2.5
// var nums1 = []
// var nums2 = [2,3]
// var nums1 = []
// var nums2 = [1]
// var nums1 = []
// var nums2 = [1,2,3,4,5]

findMedianSortedArrays(nums1, nums2);
