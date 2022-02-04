/*
1137. N-th Tribonacci Number

The Tribonacci sequence Tn is defined as follows:
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
Given n, return the value of Tn.

Example 1:
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
Example 2:
Input: n = 25
Output: 1389537

Constraints:
0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let arr = [0, 1, 1, 2];
  if (n <= 3) {
    return arr[n];
  } else {
    for (let i = 3; i < n; i++) {
      arr.push(arr[i] + arr[i - 1] + arr[i - 2]);
    }
  }
  return arr[arr.length - 1];
};

var tribonacci = function (n) {
  //t0 = 0
  //t1 = 1
  //t2 = 1
  //t3 = 2
  //t4 = 4
  //t5 = 7
  //t6 = 13
  //t7 = 24
  //t8 = 44
  //t9 = 81
  //t10 = 149
  //t11 = 274
  //t12 = 504

  let map = {};
  return (function tribo(N) {
    if (map[N]) {
      return map[N];
    } else {
      if (N === 0) {
        return 0;
      } else if (N === 1) {
        return 1;
      } else if (N === 2) {
        return 1;
      } else if (N === 3) {
        return 2;
      } else {
        if (N > 3) {
          map[N] = tribo(N - 1) + tribo(N - 2) + tribo(N - 3);
          return map[N];
        }
      }
    }
  })(n);
};
