/*
476. Number Complement

Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.

Example 1:
Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
Example 2:
Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

Constraints:
The given integer num is guaranteed to fit within the range of a 32-bit signed integer.
num >= 1
You could assume no leading zero bit in the integer’s binary representation.
This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/
*/

/*
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  //need to convert num to binary number
  //flip binary number
  //convert filped number to decimal
  //done!
  const bNum = parseInt(num).toString(2).split('');
  for (let i = 0; i < bNum.length; i++) {
    if (bNum[i] == '1') {
      bNum[i] = '0';
    } else {
      bNum[i] = '1';
    }
  }
  return parseInt(bNum.join(''), 2);
};
findComplement(20161211);

// 20161211
// Output
// 1
// Expected
// 13393220
