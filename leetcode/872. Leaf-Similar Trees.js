/*
872. Leaf-Similar Trees

Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Example 1:
Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
Output: true
Example 2:
Input: root1 = [1], root2 = [1]
Output: true
Example 3:
Input: root1 = [1], root2 = [2]
Output: false
Example 4:
Input: root1 = [1,2], root2 = [2,2]
Output: true
Example 5:
Input: root1 = [1,2,3], root2 = [1,3,2]
Output: false
Constraints:
The number of nodes in each tree will be in the range [1, 200].
Both of the given trees will have values in the range [0, 200].
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let list1 = [], list2 = []
    function helper1(node) {
        if (!node) return
        if (!node.left && !node.right) {
            list1.push(node.val)
        }
        if (node.left) helper1(node.left)
        if (node.right) helper1(node.right)   
    }
    function helper2(node) {
        if (!node) return
        if (!node.left && !node.right) {
            list2.push(node.val)
        }
        if (node.left) helper2(node.left)
        if (node.right) helper2(node.right)   
    }
    helper1(root1)
    helper2(root2)
    console.log(list1, list2)
    if (list1.length !== list2.length) return false
    let i = 0
    while(list1.length > i) {
        if (list1[i] !== list2[i]) {
            return false
        }
        i++
    }
    return true
};

//similar concept, efficient code
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function helper(node, list=[]) {
        if (!node) return
        if (!node.left && !node.right) {
            list.push(node.val)
        }
        if (node.left) helper(node.left, list)
        if (node.right) helper(node.right, list)
        return list
    }
    let a = helper(root1)
    let b = helper(root2)
    if (a.length !== b.length) return false
    let i = 0
    while (a.length > i) {
        if (a[i] !== b[i]) return false
        i++
    }
    return true
};