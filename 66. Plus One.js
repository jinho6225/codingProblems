/*
66. Plus One
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

/*
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  digits = digits.reverse(); // [3,2,1]
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 9) {
      if (i === digits.length - 1) {
        digits[i] = 0;
        digits[i + 1] = 1;
        break;
      }
      digits[i] = 0; // [0,0,0]
    } else {
      digits[i] += 1;
      break;
    }
  }
  return digits.reverse();
};

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === 0) {
      if (digits[i] === 9) {
        digits[i] = 1;
        digits[digits.length] = 0;
      } else {
        digits[i] = digits[i] + 1;
        break;
      }
    } else {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] = digits[i] + 1;
        break;
      }
    }
  }
  return digits;
};

var plusOne = function (digits) {
  let i = digits.length - 1;
  let j = 0;
  if (digits[i - j] !== 9) {
    digits[i - j] += 1;
  } else {
    while (digits[i - j] === 9) {
      if (i - j === 0) {
        if (digits[i - j] === 9) {
          digits[i - j] = 0;
        } else {
          digits[i - j] += 1;
        }
        digits = [1].concat(digits);
      } else {
        if (digits[i - j] === 9) {
          digits[i - j] = 0;
        } else {
          digits[i - j] += 1;
        }
      }
      j++;
    }
    if (j <= i) digits[i - j] += 1;
  }
  return digits;
};
