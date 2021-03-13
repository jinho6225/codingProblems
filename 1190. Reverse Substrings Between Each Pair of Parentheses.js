/**
1190. Reverse Substrings Between Each Pair of Parentheses
Medium

674

24

Add to List

Share
You are given a string s that consists of lower case English letters and brackets. 

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 

Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
Example 4:

Input: s = "a(bcdefghijkl(mno)p)q"
Output: "apmnolkjihgfedcbq"
 

Constraints:

0 <= s.length <= 2000
s only contains lower case English characters and parentheses.
It's guaranteed that all parentheses are balanced.
 */


var reverseParentheses = function(s) {
    let openIdx = s.lastIndexOf('(')
    let closeIdx = s.indexOf(')')
    let result = s
    while (openIdx !== -1 && closeIdx !== -1) {
        let a = result.substring(openIdx, closeIdx+1)
        let newStr = a.substring(1,a.length-1).split('').reverse().join('')
        result = result.replace(a, newStr)
        openIdx = result.lastIndexOf('(')
        closeIdx = result.indexOf(')')        
    }
    return result
};
//It cannot pass for "ta()usw((((a))))" case

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {

    let stack = []
    let reverseArr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            let char = stack.pop()
            while (char !== '(') {
                reverseArr.push(char)                
                char = stack.pop()
            }
            stack = stack.concat(reverseArr)
            reverseArr = []
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
};