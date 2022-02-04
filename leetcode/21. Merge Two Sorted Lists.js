/*
21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Runtime: 60 ms, faster than 85.56% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 35.6 MB, less than 61.54% of JavaScript online submissions for Merge Two Sorted Lists.
var mergeTwoLists = function (l1, l2) {
  let node = new ListNode();
  let currentNode = node;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      currentNode.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      currentNode.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  if (l2 !== null) {
    currentNode.next = l2;
  }
  if (l1 !== null) {
    currentNode.next = l1;
  }
  node = node.next;
  return node;
};

// Runtime: 72 ms, faster than 21.10% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 36.5 MB, less than 5.13% of JavaScript online submissions for Merge Two Sorted Lists.
var mergeTwoLists = function (l1, l2) {
  let arr = [];
  if (!l1 && !l2) return null;
  while (l1) {
    arr.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    arr.push(l2.val);
    l2 = l2.next;
  }
  arr = arr.sort((a, b) => a - b);
  let newNode = new ListNode(arr.shift());
  let cur = newNode;
  while (arr.length > 0) {
    cur.next = new ListNode(arr.shift());
    cur = cur.next;
  }
  return newNode;
};
