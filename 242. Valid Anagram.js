/*
242. Valid Anagram

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === 1) {
      delete map[t[i]];
    } else if (map[t[i]] > 1) {
      map[t[i]]--;
    } else {
      return false;
    }
  }
  return true;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (Object.hasOwnProperty.call(map, t[i])) {
      if (map[t[i]] > 0) {
        map[t[i]]--;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

// var s = "anagram"
// var t = "nagaram"
// var s = "rat"
// var t = "car"
var s = 'aacc';
var t = 'ccac';

isAnagram(s, t);
