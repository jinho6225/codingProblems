/*
409. Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.
Note:
Assume the length of given string will not exceed 1,010.
Example:
Input:
"abccccdd"
Output:
7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

/**
 * @param {string} s
 * @return {number}
 */

var longestPalindrome = function (s) {
  let map = {};
  let output = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]] = undefined;
      output += 2;
    }
  }
  if (s.length > output) {
    return output + 1;
  }
  return output;
};

var longestPalindrome = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  let arr = [];
  let output = 0;
  for (let key in map) {
    if (map[key] % 2 === 0) {
      output += map[key];
    } else {
      if (map[key] > 2) {
        output += map[key] - 1;
        map[key] = map[key] - (map[key] - 1);
      }
      arr.push(map[key]);
    }
  }
  if (arr.length !== 0) {
    output += 1;
  }
  return output;
};
