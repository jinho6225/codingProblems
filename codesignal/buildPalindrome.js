/*
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".

Input/Output

[execution time limit] 4 seconds (js)

[input] string st

A string consisting of lowercase English letters.

Guaranteed constraints:
3 ≤ st.length ≤ 10.

[output] string

st: "abcdc"
Output:
"abcdcba"
Expected Output:
"abcdcba"

st: "ababab"
Output:
"ababab"
Expected Output:
"abababa"

st: "abba"
Output:
"abba"
Expected Output:
"abba"

st: "abaa"
Output:
"abaa"
Expected Output:
"abaaba"

st: "aaaaba"
Output:
"aaaaba"
Expected Output:
"aaaabaaaa"

st: "abc"
Output:
"abccba"
Expected Output:
"abcba"

st: "abcabc"
Output:
"abcabca"
Expected Output:
"abcabcbacba"
*/

function buildPalindrome(st) {
    if (st === st.split('').reverse().join('')) return st
    let mid = Math.floor(st.length / 2)
    let newString = null
    while (mid < st.length) {
        let result = checkPalindrome(st, mid)
        if (result === 0 || result) {
            newString = st.substring(0, result+1)
            break;
        } else {
            mid++
        }        
    }
    if (newString === null) {
        newString = st.substring(0,st.length-1).split('').reverse().join('')   
    } else {
        newString = newString.split('').reverse().join('')    
    }
    return st + newString
}

function checkPalindrome(st, mid) {
    let left = null, right = null
    left = mid - 1
    right = mid
    if (st[left] === st[right]) {
        while (st[left] === st[right]) {
            left--
            right++
            if (right === st.length) {
                return left //1
            }        
        }
        return false
    } else {
        right = mid + 1
        while (st[left] === st[right]) {
            left--
            right++
            if (right === st.length) {
                return left //1
            }        
        }
        return false
    }
}
