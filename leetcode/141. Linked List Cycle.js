/*
141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.
To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Follow up:
Can you solve it using O(1) (i.e. constant) memory?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

//slow fast runner
var hasCycle = function (head) {
  let p1 = head;
  let p2 = head;
  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;
    if (p1 === p2) {
      return true;
    }
  }
  return false;
};

var hasCycle = function (head) {
  let arr = [];
  let cur = head;
  while (cur) {
    if (arr.includes(cur)) {
      return true;
    }
    arr.push(cur);
    cur = cur.next;
  }
  return false;
};

var hasCycle = function (head) {
  let set = new Set();
  let cur = head;
  while (cur) {
    if (set.has(cur)) {
      return true;
    }
    set.add(cur);
    cur = cur.next;
  }
  return false;
};
