/**
328. Odd Even Linked List

Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
Example 1:
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
 
Constraints:
The relative order inside both the even and odd groups should remain as it was in the input.
The first node is considered odd, the second node even and so on ...
The length of the linked list is between [0, 10^4].
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head) {
  if (!head) return null;
  let prev = null;
  let hold = new ListNode();
  let hold2 = new ListNode();
  let a = null,
    b = null;
  let cur = head;
  let i = 1;
  while (cur) {
    prev = new ListNode(cur.val);
    if (i % 2 === 1) {
      hold.next = prev;
      if (i === 1) {
        a = hold;
      }
      hold = hold.next;
    } else {
      hold2.next = prev;
      if (i === 2) {
        b = hold2;
      }
      hold2 = hold2.next;
    }
    cur = cur.next;
    i++;
  }
  if (a === null) {
    return b.next;
  } else if (b === null) {
    return a.next;
  }
  cur = a.next;
  let count = 1;
  while (cur) {
    if (cur.next === null && count) {
      cur.next = b.next;
      count--;
    }
    cur = cur.next;
  }
  return a.next;
}

//another solution added
//shorter solution
var oddEvenList = function(head) {
  if(!head) return null
  
  let cur = head
  let oddPo = head
  let evenPO = head.next
  let evenHead = head.next
  while (oddPo && oddPo.next && oddPo.next.next) {
      oddPo.next = oddPo.next.next
      oddPo = oddPo.next
      evenPO.next = oddPo.next
      evenPO = evenPO.next
  }

  oddPo.next = evenHead
  return head
};