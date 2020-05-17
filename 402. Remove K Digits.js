/*
402. Remove K Digits
Medium

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.
Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/

/*
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let numArr = num.split('');
  if (k === numArr.length) return '0';
  let i = 0;
  while (i < numArr.length && k) {
    if (numArr[i] > numArr[i + 1]) {
      numArr.splice(i, 1);
      i -= 2;
      k--;
    } else if (numArr[i] >= numArr[i - 1] && numArr[i + 1] === undefined) {
      numArr.splice(i, 1);
      i -= 2;
      k--;
    }
    i++;
  }
  num = numArr.join('');
  while (num.substring(0, 1) === '0' && num[1] !== undefined) {
    num = num.substring(1);
  }
  return num;
};
