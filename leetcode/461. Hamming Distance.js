/*
461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.
Example:
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var hammingDistance = function (x, y) {
  // XOR bitwise operation
  // https://www.khanacademy.org/computing/computer-science/cryptography/ciphers/a/xor-bitwise-operation
  /*
    AND & OR & XOR
    XOR is different each other, then return 1
        x => 0001
        y => 0100
after XOR => 0101
    then it make binary string (it will  '101' ) and split using '0' then return length
  */

  return (x ^ y).toString(2).split('0').join('').length;
};

var hammingDistance = function (x, y) {
  let aLen = x.toString(2).length;
  let bLen = y.toString(2).length;
  let a = x.toString(2).split('').reverse();
  let b = y.toString(2).split('').reverse();
  if (aLen >= bLen) {
    let array;
    if (aLen !== bLen) {
      array = new Array(aLen - bLen);
    }
    b = b.concat(array);
    b.fill('0', bLen, aLen);
  } else {
    let array = new Array(bLen - aLen);
    a = a.concat(array);
    a.fill('0', aLen, bLen);
  }
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count += 1;
    }
  }
  return count;
};
