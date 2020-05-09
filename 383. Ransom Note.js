/*
383. Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
Each letter in the magazine string can only be used once in your ransom note.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
/*
/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// Runtime: 64 ms, faster than 94.16% of JavaScript online submissions for Ransom Note.
// Memory Usage: 42.5 MB, less than 33.33% of JavaScript online submissions for Ransom Note.
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.indexOf(ransomNote[i]) !== -1) {
      let idx = magazine.indexOf(ransomNote[i]);
      magazine = magazine.substring(0, idx) + magazine.substring(idx + 1);
    } else {
      return false;
    }
  }
  return true;
};

//Runtime: 80 ms, faster than 66.52% of JavaScript online submissions for Ransom Note.
//Memory Usage: 36.9 MB, less than 100.00% of JavaScript online submissions for Ransom Note.
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
  let map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (!map[magazine[i]]) {
      map[magazine[i]] = 1;
    } else {
      map[magazine[i]] += 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (Object.hasOwnProperty.call(map, ransomNote[i])) {
      if (map[ransomNote[i]] === 0) {
        return false;
      }
      map[ransomNote[i]] = map[ransomNote[i]] - 1;
    } else {
      return false;
    }
  }
  return true;
};
