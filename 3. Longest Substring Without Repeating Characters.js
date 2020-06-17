/*
3. Longest Substring Without Repeating Characters
Medium

Given a string, find the length of the longest substring without repeating characters.
Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      arr.push(s[i]);
      if (arr.length > max) max = arr.length;
    } else {
      if (arr.length > max) max = arr.length;
      let idx = arr.indexOf(s[i]);
      arr.splice(0, idx + 1);
      arr.push(s[i]);
    }
  }
  return max;
};
