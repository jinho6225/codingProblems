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

var isPalindrome = function (head) {
  if (!head) return true;
  function reverseLinkedList(head) {
    let cur = head;
    let prev = null;
    while (cur) {
      let tmp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = tmp;
    }
    head = prev;
    return head;
  }

  let cur1 = head;
  let cur2 = head;

  while (cur2.next && cur2.next.next) {
    cur2 = cur2.next.next;
    cur1 = cur1.next;
  }

  cur1.next = reverseLinkedList(cur1.next);
  cur1 = cur1.next;

  while (cur1 != null) {
    if (head.val != cur1.val) return false;
    head = head.next;
    cur1 = cur1.next;
  }
  return true;
};

var isPalindrome = function (head) {
  let stack = [];
  let cur = head; //1-2-2-1 //[1,1,1,1,3,3,3,3,1,1,1,1]
  while (cur) {
    stack.push(cur.val);
    cur = cur.next;
  }
  let first = 0;
  let last = stack.length - 1;
  while (first < last) {
    if (stack[first] === stack[last]) {
      first++;
      last--;
    } else {
      return false;
    }
  }
  return true;
};

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
