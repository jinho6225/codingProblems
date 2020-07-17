/*
557. Reverse Words in a String III

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let sArr = s.split(' ');
  let result = [];
  for (let i = 0; i < sArr.length; i++) {
    let start = 0;
    let last = sArr[i].length - 1;

    let stringArr = sArr[i].split('');
    while (start < last) {
      let temp = stringArr[start];
      stringArr[start] = stringArr[last];
      stringArr[last] = temp;
      start++;
      last--;
    }
    result.push(stringArr.join(''));
  }
  return result.join(' ');
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split('').reverse().join(''));
  }
  return newArr.join(' ');
};
