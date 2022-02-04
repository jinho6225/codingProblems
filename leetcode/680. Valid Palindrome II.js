/**
680. Valid Palindrome II

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    //"deeee"
    
    let start = 0; // 0
    let end = s.length - 1 //4
    while (start < end) {
        if (s[start] === s[end]) {
            start++
            end--
        } else {
            return isPalindrom(s, start+1, end) || isPalindrom(s, start, end-1)
        }
    }
    return true
};

function isPalindrom (s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false
        }
        start++
        end--
    }
    return true
}