/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let list = []
    let cur = head
    while (cur) {
        list.push(cur.val)
        cur = cur.next
    }
    console.log(list)
    function helper(arr) {
        if (arr.length === 0) return null
        let mid = Math.floor(arr.length/2)
        let root = new TreeNode(arr[mid])
        root.left = helper(arr.slice(0, mid))
        root.right = helper(arr.slice(mid+1))
        return root
    }
    return helper(list)
};