/*
222. Count Complete Tree Nodes
Medium

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:
Input: 
    1
   / \
  2   3
 / \  /
4  5 6
Output: 6
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (!root) return 0
    let cur = root
    let queue = [], list = []
    queue.push(cur)
    while (queue.length) {
        cur = queue.shift()
        list.push(cur.val)
        if (cur.left) queue.push(cur.left)
        if (cur.right) queue.push(cur.right)
    }
    return list.length
};