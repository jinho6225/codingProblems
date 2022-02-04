/*
69. Sqrt(x)

Implement int sqrt(int x).
Compute and return the square root of x, where x is guaranteed to be a non-negative integer.
Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:
Input: 4
Output: 2
Example 2:
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since
             the decimal part is truncated, 2 is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  let i = 0,
    hi = x;
  while (i <= hi) {
    let mid = Math.floor((i + hi) / 2);
    if (mid * mid > x) {
      hi = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return hi;
};

var mySqrt = function (x) {
  for (var i = 0; i * i <= x; i++) {
    if (i * i === x) {
      return i;
    } else if (i * i > x) {
      return i - 1;
    }
  }
  return i - 1;
};

var mySqrt = function (x) {
  let i = 1;
  let num = i ** 2;
  while (x >= num) {
    i++;
    num = i ** 2;
  }
  return i - 1;
};
