/*
103. Binary Tree Zigzag Level Order Traversal
Medium

Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let list = []
    let depth = 1
    function helper(root, depth) {
        if (!root) return
        let obj = {
            val: root.val,
            depth: depth
        }
        list.push(obj)
        depth++
        if (root.left) helper(root.left, depth)
        if (root.right) helper(root.right, depth)
    }
    
    helper(root, depth)
    
    let lst = []
    for (let i = 0; i < list.length; i++) {
        if (!lst[list[i].depth - 1])
        lst[list[i].depth - 1] = []
        lst[list[i].depth - 1].push(list[i].val)
    }
    for (let i = 0; i < lst.length; i++) {
        if (i % 2 === 1) {
        lst[i] = lst[i].reverse()
        }
    }
    return lst
};