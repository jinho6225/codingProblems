/*
94. Binary Tree Inorder Traversal
Medium

Given a binary tree, return the inorder traversal of its nodes' values.

Example:
Input: [1,null,2,3]
   1
    \
     2
    /
   3
Output: [1,3,2]
Follow up: Recursive solution is trivial, could you do it iteratively?
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

var inorderTraversal_iterative = function (root) {
  let list = [],
    stack = [],
    cur = root;
  while (true) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    if (stack.length === 0) break;
    cur = stack.pop();
    list.push(cur.val);
    cur = cur.right;
  }
  return list;
};

var inorderTraversal_recursive = function (root) {
  let list = [];
  function helper(root) {
    if (!root) return null;
    if (root.left) {
      helper(root.left);
    }
    list.push(root.val);
    if (root.right) {
      helper(root.right);
    }
  }
  helper(root);
  return list;
};
