/*
145. Binary Tree Postorder Traversal
Hard

Given a binary tree, return the postorder traversal of its nodes' values.
Example:
Input: [1,null,2,3]
   1
    \
     2
    /
   3
Output: [3,2,1]
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
//iteratively
var postorderTraversal = function (root) {
  let list = [],
    stack = [];
  if (!root) return list;
  let cur = root;
  stack.push(cur);
  while (stack.length > 0) {
    cur = stack.pop();
    list.unshift(cur.val);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }
  return list;
};

//Recursive solution
var postorderTraversal = function (root) {
  let list = [];
  if (!root) return list;
  let cur = root;
  const helper = (node) => {
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
    list.push(node.val);
  };
  helper(cur);
  return list;
};
