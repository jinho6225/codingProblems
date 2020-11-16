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

//Runtime: 56 ms, faster than 80.90% of JavaScript online submissions for Reverse Linked List.
// recursively
var reverseList = function (head) {
  if (!head) {
    return false;
  }
  if (head.next === null) {
    return head;
  }

  let temp = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return temp;
};

//Runtime: 52 ms, faster than 93.69% of JavaScript online submissions for Reverse Linked List.
//iteratively;
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


// 11/15/2020
var reverseList = function(head) {
  if (!head) return null
  if (!head.next) return head
  let first = head
  let second = first.next
  while (second) {
      let tmp = second.next
      second.next = first
      first = second
      second = tmp
  }
  head.next = null
  head = first
  return head
};