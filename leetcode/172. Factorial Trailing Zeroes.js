/*
172. Factorial Trailing Zeroes

Given an integer n, return the number of trailing zeroes in n!.

Example 1:
Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:
Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity.
*/

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (n < 5) return 0;
  return Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
};

var trailingZeroes = function (n) {
  let output = null;
  if (n < 5) {
    return 0;
  } else {
    output = Math.floor(n / 5);
  }
  let result = null;
  if (output >= 5) {
    result = trailingZeroes(output);
  }
  return output + result;
};
