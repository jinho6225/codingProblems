/*
367. Valid Perfect Square

Given a positive integer num, write a function which returns True if num is a perfect square else False.
Note: Do not use any built-in library function such as sqrt.

Example 1:
Input: 16
Output: true
Example 2:
Input: 14
Output: false
/*

/**
 * @param {number} num
 * @return {boolean}
 */

// Runtime: 1128 ms, faster than 14.29% of JavaScript online submissions for Valid Perfect Square.
// Memory Usage: 34.5 MB, less than 50.00% of JavaScript online submissions for Valid Perfect Square.

var isPerfectSquare = function (num) {
  let count = 1;
  while (num > 0) {
    num -= count;
    if (num === 0) return true;
    count += 2;
  }
  return false;
};

var isPerfectSquare = function (num) {
  return Math.pow(num, 1 / 2) % 1 == 0;
};

var isPerfectSquare = function (num) {
  if (num === 1) return true;
  let length = num / 2;
  for (let i = 2; i <= length; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};

isPerfectSquare(2147483647);

// Sqrt    Sqr
// 1       1
//     3
// 2       4   = 3 + 1
//     5
// 3       9   = 5 + 4
//     7
// 4       16  = 9 + 7
//     9
// 5       25  = 16 + 9
//     11
// 6       36  = 25 + 11
//     13
// 7       49  = 36 + 13
//     15
// 8       64  = 49 + 15
//     17
// 9       81  = 64 + 17
//     19
// 10      100 = 81 + 19
