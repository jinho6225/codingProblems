/*
19. Remove Nth Node From End of List
Medium

Given a linked list, remove the n-th node from the end of list and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:
Could you do this in one pass?
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null;
  if (!head.next) {
    if (n === 1) {
      return null;
    }
  }
  let cur = head;
  let map = {};
  count = 0;
  while (cur) {
    map[count] = cur.val;
    count++;
    cur = cur.next;
  }
  let arr = Object.entries(map);
  let tarVal;
  if (arr.length === n) {
    tarVal = arr[0];
  } else {
    tarVal = arr[arr.length - n];
  }
  let previous;
  let current = head;
  let kount = 0;
  while (current) {
    if (current.next === null) {
      previous.next = null;
      break;
    } else if (current.next.val === tarVal[1] && arr.length - n === kount) {
      current.next = current.next.next;
      break;
    } else if (current.val === tarVal[1] && arr.length - n === kount) {
      current.val = current.next.val;
      current.next = current.next.next;
      break;
    }
    kount++;
    previous = current;
    current = current.next;
  }
  return head;
};
