/*
917. Reverse Only Letters
Given a string S, return the "reversed" string where all characters
that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:
Input: "ab-cd"
Output: "dc-ba"
Example 2:
Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:
Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Note:
S.length <= 100
33 <= S[i].ASCIIcode <= 122
S doesn't contain \ or "
*/

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(str) {
  var letterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var array = Array.from(str)
  var first = 0
  var last = array.length-1
  while (first < last) {
    if (letterArr.includes(array[first])) {
      if (letterArr.includes(array[last])) {
        var temp = array[first]
        array[first] = array[last]
        array[last] = temp
        first++
        last--
      } else {
        last--
      }
    } else {
      first++
    }
  }
  return array.join('')
}
