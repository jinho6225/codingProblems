/*
100. Same Tree

Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
Input:     1         1
          / \       / \
         2   3     2   3
        [1,2,3],   [1,2,3]
Output: true
Example 2:
Input:     1         1
          /           \
         2             2
        [1,2],     [1,null,2]
Output: false
Example 3:
Input:     1         1
          / \       / \
         2   1     1   2
        [1,2,1],   [1,1,2]
Output: false
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let isTrue = true
    function helper(node1, node2) {
        if (!node1 && !node2) {
            return
        } else if (node1 && node2) {
        } else {
            isTrue = false
            return 
        }
        if (node1.val !== node2.val) {
            isTrue = false
            return 
        }
        if (node1.left && node2.left) {
            helper(node1.left, node2.left)
        } else if (!node1.left && !node2.left) {
        } else {
            isTrue = false
            return 
        }
        if (node1.right && node2.right) {
            helper(node1.right, node2.right)
        } else if (!node1.right && !node2.right) {
        } else {
            isTrue = false
            return 
        }
            
    }
    helper(p, q)
    return isTrue
};

/*
define isTrue variable with true value
define helper funtion will take two node
    if node1.val is not equal to node2.val
        isTrue = false
        return isTrue;
    
    if (node1.left && node2.left) {
        helper(n1.l, n2.l)
    } else if(!node1.left && !node2.left) {
        //do something?
    } else {
        isTrue = false
        return isTrue;    
    }
    if (node1.right && node2.right) {
        helper(n1.r, n2.r)
    } else if(!node1.right && !node2.right) {
        //do something?
    } else {
        isTrue = false
        return isTrue;    
    }
*/