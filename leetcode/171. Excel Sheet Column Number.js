/*
171. Excel Sheet Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
Example 1:
Input: "A"
Output: 1
Example 2:
Input: "AB"
Output: 28
Example 3:
Input: "ZY"
Output: 701
*/

/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 68 ms, faster than 81.46% of JavaScript online submissions for Excel Sheet Column Number.
// Memory Usage: 35.4 MB, less than 66.67% of JavaScript online submissions for Excel Sheet Column Number.
var titleToNumber = function (s) {
  let strArr = s.split('').reverse();
  let arr = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  for (let j = 0; j < strArr.length; j++) {
    let idx = alphabet.indexOf(strArr[j]);
    if (j) {
      arr.push((idx + 1) * 26 ** j);
    } else {
      arr.push(idx + 1);
    }
  }
  let total = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return total;
};
