/*
2. Add Two Numbers
Medium

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let store = 0;
  let node = new ListNode(); // {val:0,next:null}
  let cur = node;
  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val; //sum =2, 4,// 1+3 => 4
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val; //sum = 7,10// 8
      l2 = l2.next;
    }
    if (sum >= 10) {
      store = 1;
      sum = sum - 10;
    }
    cur.next = new ListNode(sum); //{val:0,next: {val:7, next:{val:0, next:{val: 8, next:null}}}}
    cur = cur.next; //val:7, next:null // val:0,next:null// val:8,next:null
    sum = store; //0
    store = 0;
  }
  return node.next;
};

var addTwoNumbers = function (l1, l2) {
  let arr = [];
  let sum = 0,
    carry = 0;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    }
    arr.push(sum);
    sum = carry;
    carry = 0;
  }
  if (sum) {
    arr.push(sum);
  }
  let node = new ListNode();
  let cur = node;
  while (arr.length > 0) {
    cur.next = new ListNode(arr.shift());
    cur = cur.next;
  }
  return node.next;
};
