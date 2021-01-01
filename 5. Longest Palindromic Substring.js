/*
5. Longest Palindromic Substring
Medium

Example 1:
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:
Input: s = "cbbd"
Output: "bb"
Example 3:
Input: s = "a"
Output: "a"
Example 4:
Input: s = "ac"
Output: "a"
 
Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),
*/

/*
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = s[0]
    for (let i = 0; i < s.length; i++) {
        helper(i, i)
        helper(i, i+1)
    }
    return longest
    
    function helper(idx1, idx2) {
        while (idx1 >= 0 && idx2 <= s.length && s[idx1] === s[idx2]) {
            let newS = s.substring(idx1, idx2+1)
            if (newS.length > longest.length) longest = newS
            idx1--
            idx2++
        }
        
    }
};