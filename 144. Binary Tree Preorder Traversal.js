/*
144. Binary Tree Preorder Traversal
Medium

Given a binary tree, return the preorder traversal of its nodes' values.
Example:
Input: [1,null,2,3]
   1
    \
     2
    /
   3
Output: [1,2,3]
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

var preorderTraversal_iterative = function (root) {
  let list = [],
    stack = [],
    cur = root;
  while (true) {
    while (cur) {
      list.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    if (stack.length === 0) break;
    cur = stack.pop();
    cur = cur.right;
  }
  return list;
};

var preorderTraversal_recursive = function (root) {
  let list = [];
  function helper(root) {
    if (!root) return null;
    list.push(root.val);
    if (root.left) {
      helper(root.left);
    }
    if (root.right) {
      helper(root.right);
    }
  }
  helper(root);
  return list;
};
