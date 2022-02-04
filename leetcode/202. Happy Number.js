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

/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function (n) {
  let map = new Map();
  function helper(n) {
    if (map.has(n)) {
      return false;
    } else {
      let sum = 0;
      if (n === 1) return true;
      map.set(n, false);
      let strArr = String(n).split('');
      for (let i = 0; i < strArr.length; i++) {
        sum += strArr[i] ** 2;
      }
      return helper(sum);
    }
  }
  return helper(n);
};

/*
we will have type number positivie integer
need to convert string and array
need to defind total variable as 0 first
using for loop
it will be sum(as exponential?? using ** and itself) with total
and it will repeat again again again
will make helper function and will use recursion
recursion need
base case
if total equal 1
    return true
else what condition??
i tested it until 9
it's not possible i think except 1
let me make map and save it and check up
memoization?! whenever checkup
recursive case
*/
var isHappy = function (n) {
  n = n.toString();
  let map = {};
  let arr;
  let total = 0;
  if (n === '1') {
    map[n] = true;
    return map[n];
  } else if (n === '2' || n === '3' || n === '4' || n === '5') {
    map[n] = false;
    return map[n];
  } else {
    if (n === '10') {
      map[n] = true;
      return map[n];
    } else if (Number(n) < 10) {
      total = Number(n) * Number(n);
    } else {
      arr = n.split('');
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]) * Number(arr[i]);
        total += arr[i];
      }
    }
  }
  return isHappy(total);
};

/*
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
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
