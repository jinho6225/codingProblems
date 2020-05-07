/*
125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:
Input: "race a car"
Output: false
*/

/*
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0 || s.length === 1) {
    return true;
  }
  let regex = /\W/;
  let newStr = '';
  for (let i = 0; i < s.length; i++) {
    if (!regex.test(s[i])) {
      newStr += s[i].toLowerCase();
    }
  }
  let i = 0;
  let j = newStr.length - 1;
  while (i < j) {
    if (newStr[i] !== newStr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

var s = 'A man, a plan, a canal: Panama';
isPalindrome(s);
