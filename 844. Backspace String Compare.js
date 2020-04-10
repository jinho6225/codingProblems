/*
844. Backspace String Compare
Easy
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var backspaceCompare = function (S, T) {
  if (!S.includes('#') && !T.includes('#')) {
    if (S === T) {
      return true;
    } else {
      return false;
    }
  }
  let indexOne = S.indexOf('#');
  let indexTwo = T.indexOf('#');
  S = S.substring(0, indexOne - 1) + S.substring(indexOne + 1);
  T = T.substring(0, indexTwo - 1) + T.substring(indexTwo + 1);
  return backspaceCompare(S, T);
};
