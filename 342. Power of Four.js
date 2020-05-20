/*
342. Power of Four

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:
Input: 16
Output: true
Example 2:
Input: 5
Output: false
Follow up: Could you solve it without loops/recursion?
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  // let total = 1
  // while (total < num) {
  //     total *= 4
  // }
  // return total === num
  return Number.isInteger(Math.log10(num) / Math.log10(4));
};

var isPowerOfFour = function (num) {
  let total = 1;
  while (total < num) {
    total *= 4;
  }
  return total === num;
};

var isPowerOfFour = function (num) {
  //recursion
  if (num === 1 || num === 4) return true;
  if (num === 0 || num === 2 || num === 3) return false;
  if (num > 4) {
    if (num % 4 !== 0) return false;
  }
  let n = num / 4;
  return isPowerOfFour(n);
};
