/*
231. Power of Two

Given an integer, write a function to determine if it is a power of two.

Example 1:
Input: 1
Output: true
Explanation: 20 = 1
Example 2:
Input: 16
Output: true
Explanation: 24 = 16
Example 3:
Input: 218
Output: false
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return Number.isInteger(Math.log10(n) / Math.log10(2));
};

var isPowerOfTwo = function (n) {
  /*
    think
    1,2,4,8,16,32,64,128,256
    2147483646
    */
  if (n === 0) return false;
  if (n > 2) {
    if (n % 2 === 1) return false;
  }
  if (n === 1) return true;
  let num = (n * 1) / 2;
  return isPowerOfTwo(num);
};
