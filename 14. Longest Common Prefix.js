/*
14. Longest Common Prefix
Easy

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"
Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:
All given inputs are in lowercase letters a-z.
*/

/*
 * @param {string[]} strs
 * @return {string}
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  strs = strs.sort((a, b) => a.length - b.length);
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
    let isHas = false;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        isHas = false;
        break;
      } else {
        isHas = true;
      }
    }
    if (isHas) {
      result += strs[0][i];
    } else {
      break;
    }
  }
  return result;
};

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  strs = strs.sort((a, b) => a.length - b.length);
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return result;
      }
    }
    result += strs[0][i];
  }
  return result;
};

var input = ['flower', 'flow', 'flight'];
//Output: "fl"
// var input = ["dog","racecar","car"]
// Output: ""
longestCommonPrefix(input);



var longestCommonPrefix = function (strs) {
  let result = "";
  if (!strs.length) return result;
  strs = strs.sort((a, b) => b.length - a.length);
  let i = 0, incorrect = false
  while (i < strs[0].length) {
    let target = strs[0].substring(0, i + 1);
    for (let j = 1; j < strs.length; j++) {
      let array = strs[j].split(target)
      if (array.length === 1 || array[0] !== "") {
        incorrect = true
        break;
      } 
    }
    if (!incorrect) {
      result = target
    }
    i++;
  }
  return result
};