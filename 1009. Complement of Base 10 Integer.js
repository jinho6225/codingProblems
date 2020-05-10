//This question is the same as 476: https://leetcode.com/problems/number-complement/

/*
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  const bNum = parseInt(N).toString(2).split('');
  for (let i = 0; i < bNum.length; i++) {
    if (bNum[i] == '1') {
      bNum[i] = '0';
    } else {
      bNum[i] = '1';
    }
  }
  return parseInt(bNum.join(''), 2);
};
