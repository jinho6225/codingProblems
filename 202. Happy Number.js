/*
202. Happy Number
Easy

Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:
Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
*/

/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 1) {
    return true;
  }
  if (n === 2 || n === 3 || n === 4) {
    return false;
  }
  let arr;
  if (n >= 10) {
    arr = n.toString().split('');
  } else {
    arr = Array.from(n.toString());
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]) * Number(arr[i]);
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return isHappy(total);
};
