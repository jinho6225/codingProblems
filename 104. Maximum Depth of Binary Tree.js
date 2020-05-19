//5/19/20 solve this problem again
//using depthFirstSearch

var maxDepth = function (root) {
  let max = 0;
  if (!root) return max;
  function depthF(root, count = 0) {
    count++;
    if (count > max) {
      max = count;
    }
    if (root.left) {
      depthF(root.left, count);
    }
    if (root.right) {
      depthF(root.right, count);
    }
    return max;
  }
  return depthF(root);
};

/*
104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children.

Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

/*
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
var maxDepth = function (root) {
  let max = 0;
  function helper(root, depth = 0) {
    if (!root) return false;
    if (!root.left && !root.right) {
      depth++;
      if (depth > max) {
        max = depth;
      }
    } else {
      depth++;
      helper(root.left, depth);
      helper(root.right, depth);
    }
  }
  helper(root);
  return max;
};

[1, 2, 3, 4, null, null, 5];
var root = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

maxDepth(root);
