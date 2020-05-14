/*
234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.
Example 1:
Input: 1->2
Output: false
Example 2:
Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
*/
/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */

//  Runtime: 52 ms, faster than 98.15% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 39.7 MB, less than 66.67% of JavaScript online submissions for Palindrome Linked List.
// Next challenges:
var isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  if (arr.length === 1) return true;
  if (arr.length === 2) {
    if (arr[0] === arr[1]) return true;
    else return false;
  }
  if (arr.length === 3) {
    if (arr[0] === arr[2]) return true;
    else return false;
  }
  if (arr.length > 3) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      if (arr[start] === arr[end]) {
        start++;
        end--;
      } else {
        return false;
      }
    }
  }
  return true;
};
