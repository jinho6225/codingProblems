/*
28. Implement strStr()

Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
/*

/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;
  let arr = haystack.split(needle);
  if (arr[0].length === haystack.length) {
    return -1;
  } else {
    return arr[0].length;
  }
};

var strStr = function (haystack, needle) {
  if (haystack === needle || needle === '') {
    return 0;
  } else if (needle.length > haystack.length) {
    return -1;
  }
  let arr = haystack.split(needle);
  if (arr[0] === '') {
    return 0;
  } else if (arr[0].length === haystack.length) {
    return -1;
  } else if (arr[0].length > 0) {
    return arr[0].length;
  }
};

var haystack = 'aaaaa';
var needle = 'bba';
// "mississippi"
// "issip"
// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:
// Input: haystack = "aaaaa", needle = "bba"

strStr(haystack, needle);
