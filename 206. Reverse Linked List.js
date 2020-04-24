/*
206. Reverse Linked List
Easy
Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?
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

//Runtime: 52 ms, faster than 93.69% of JavaScript online submissions for Reverse Linked List.
var reverseList = function (head) {
  let prv = null;
  while (head) {
    tmp = head.next;
    head.next = prv;
    prv = head;
    head = tmp;
  }
  head = prv;
  return head;
};
