/*
107. Binary Tree Level Order Traversal II
Easy

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
var levelOrderBottom = function(root) {
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
    let depthArr = list.map(el => el.depth)
    let maxDepth = Math.max(...depthArr)
    let lst = []
    for (let i = 0; i < list.length; i++) {
        let index = Math.abs(list[i].depth - maxDepth)
        if (!lst[index])
        lst[index] = []
        lst[index].push(list[i].val)
    }
    return lst 
};