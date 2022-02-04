/*
326. Power of Three

Given an integer, write a function to determine if it is a power of three.

Example 1:
Input: 27
Output: true
Example 2:
Input: 0
Output: false
Example 3:
Input: 9
Output: true
Example 4:
Input: 45
Output: false
Follow up:
Could you do it without using any loop / recursion?
*/

/*
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return Number.isInteger(Math.log10(n) / Math.log10(3));
};

//this was loop below;;
var isPowerOfThree = function (n) {
  let total = 1;
  while (total < n) {
    total *= 3;
  }
  return total === n;
};

var isPowerOfThree = function (n) {
  //recursion
  if (n === 1 || n === 3) return true;
  if (n === 0 || n === 2) return false;
  if (n > 3) {
    if (n % 3 !== 0) return false;
  }
  let num = n / 3;
  return isPowerOfThree(num);
};
