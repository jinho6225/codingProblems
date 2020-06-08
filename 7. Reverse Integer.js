/*
7. Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321
Example 2:
Input: -123
Output: -321
Example 3:
Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let a = Math.abs(x).toString().split('').reverse().join('');
  if (a > Math.pow(2, 31) - 1) {
    return 0;
  } else if (x > 0) {
    return Number(a);
  } else {
    return a * -1;
  }
};

var reverse = function (x) {
  if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
    return 0;
  }
  let a = null;
  if (x < 0) {
    a = x.toString().split('').slice(1);
    a = a.reverse();
    a.unshift('-');
    a = a.join('');
  } else {
    a = x.toString().split('').reverse().join('');
  }

  if (Number(a) > Math.pow(2, 31) || Number(a) < Math.pow(-2, 31)) {
    return 0;
  } else {
    return Number(a);
  }
};
