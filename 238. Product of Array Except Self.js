/*
238. Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]

Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).
Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/*
 * @param {number[]} nums
 * @return {number[]}
 */

//Runtime: 72 ms, faster than 96.29% of JavaScript online submissions for Product of Array Except Self.
var productExceptSelf = function (nums) {
  const sum = (arr) => {
    if (arr.length === 1) {
      return arr[0];
    }
    return arr[0] * sum(arr.slice(1));
  };
  if (nums.includes(0)) {
    let idx = nums.indexOf(0);
    let newNums = nums.slice();
    newNums.splice(idx, 1);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        nums[i] = sum(newNums);
      } else {
        nums[i] = 0;
      }
    }
  }
  let total = 1;
  for (let i = 0; i < nums.length; i++) {
    total = total * nums[i];
  }
  if (total === 0) {
    return nums;
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = total / nums[i];
  }
  return nums;
};

// Runtime: 2564 ms, faster than 12.93% of JavaScript online submissions for Product of Array Except Self.
var productExceptSelf = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let result = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else {
        result = result * nums[j];
      }
    }
    arr.push(result);
  }
  return arr;
};

var input = [1, 2, 3, 4];
// var input = [0, 0]
// var input = [1, 0]

productExceptSelf(input);
//Output: [24,12,8,6]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let n = nums.length
    if(n == 0 || n == 1) return []

  let productArr = []
  let product = 1
  for (let i = 0; i <= n-1; i++) {
    productArr[i] = product
    product *= nums[i]
  }
  product = 1
  for (let i = n-1; i >= 0; i--) {
    productArr[i] *= product
    product *= nums[i]
  }
  return productArr
  for (let i = 0; i < nums.length; i++) {
    nums[i] = total / nums[i]
  }
  return nums    
};