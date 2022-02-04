/**
92. Reverse Linked List II
Medium

Reverse a linked list from position m to n. Do it in one-pass.
Note: 1 ≤ m ≤ n ≤ length of list.

Example:
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	if (m === n) return head
	let cur = head, count = 1
	let prev = null, hold = null, flag = false
	while (cur) {
		if (count === m) {
			let node = new ListNode(cur.val)
			prev = node
		} else if (m < count && count <= n) {
			let node = new ListNode(cur.val)
			hold = node
			hold.next = prev
			prev = hold
		} else if (count > n) {
			while(prev) {
				if (prev.next === null) {
					prev.next = cur;
					flag = true
					break;
				}
				prev = prev.next
			}
			if (flag) break;
		}
		count++
		cur = cur.next
	}
	cur = head, count = 1
	while (cur) {
		if (m - 1 === count) {
			cur.next = hold
			break;
		} else if (m - 1 === 0) {
			return hold
		}
		count++        
		cur = cur.next
	}
	return head
};