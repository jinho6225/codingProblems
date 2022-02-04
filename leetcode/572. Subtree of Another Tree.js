/*
572. Subtree of Another Tree

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.


Example 2:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

var isSubtree = function (s, t) {
  function isSame(A, B) {
    if (!A && !B) return true;
    if (!B) return false;
    if (!A) return false;
    if (A.val !== B.val) {
      return false;
    }
    return isSame(A.left, B.left) && isSame(A.right, B.right);
  }
  function helper(node, t, count = 0) {
    if (!node) return false;
    if (node.val === t.val && isSame(node, t)) {
      return true;
    } else {
      return helper(node.left, t, count++) || helper(node.right, t, count++);
    }
  }
  return helper(s, t);
};
