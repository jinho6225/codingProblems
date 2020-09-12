/*
637. Average of Levels in Binary Tree

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
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
        if (!lst[list[i].depth - 1]) {
            lst[list[i].depth - 1] = []
            lst[list[i].depth - 1].push(list[i].val)
            
        } else {
            lst[list[i].depth - 1].push(list[i].val)
        }
    }
    function sum(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i]
        }
        return total 
    }
    let result = []
    for (let i = 0; i < lst.length; i++) {
        if (lst[i].length === 1) {
            result.push(lst[i][0])  
        } else {
            result.push(sum(lst[i]) / lst[i].length)
        } 
    }
    return result
};