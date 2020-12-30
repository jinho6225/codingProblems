/*
647. Palindromic Substrings
Medium

Given a string, your task is to count how many palindromic substrings in this string.
The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

Note:
The input string length won't exceed 1000.
*/
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0
    for (let i = 0; i < s.length; i++) {
        helper(i, i)
        helper(i, i+1)
    }

    function helper(i, j) {
        while (i >= 0 && j <= s.length && s[i] === s[j]) {
            count++
            i--
            j++
        }
    }
    return count
};

console.log(countSubstrings('aaa'))