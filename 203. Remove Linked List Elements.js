/*
203. Remove Linked List Elements

Remove all elements from a linked list of integers that have value val.

Example:
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return null;
  let cur = head;
  let prev = null;
  while (cur) {
    if (cur.val === val) {
      if (cur.next !== null) {
        cur.val = cur.next.val;
        cur.next = cur.next.next;
      } else {
        if (prev === null) return null;
        prev.next = null;
        break;
      }
    } else {
      prev = cur;
      cur = cur.next;
    }
  }
  return head;
};
