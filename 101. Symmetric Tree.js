/*
101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Follow up: Solve it both recursively and iteratively.
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
 * @return {boolean}
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  console.log(root);
  let result = true;
  if (!root) return result;
  function compare(left, right) {
    if (!left && !right) return;
    if (!left) {
      result = false;
      return;
    }
    if (!right) {
      result = false;
      return;
    }
    if (left.val !== right.val) {
      result = false;
      return result;
    }
    compare(left.left, right.right);
    compare(left.right, right.left);
  }
  compare(root.left, root.right);
  return result;
};

////

var isSymmetric = function (root) {
  if (!root) return true;
  let lnode = root,
    rnode = root;
  let left = [],
    right = [];

  function leftHelper(root) {
    left.push(root.val);
    if (root.left) {
      leftHelper(root.left);
    } else if (root.left === null && root.right === null) {
    } else if (root.left === null) {
      left.push(null);
    }
    if (root.right) {
      leftHelper(root.right);
    } else if (root.left === null && root.right === null) {
    } else if (root.right === null) {
      left.push(null);
    }
    return left;
  }
  leftHelper(lnode);
  function rightHelper(root) {
    right.push(root.val);
    if (root.right) {
      rightHelper(root.right);
    } else if (root.right === null && root.left === null) {
    } else if (root.right === null) {
      right.push(null);
    }
    if (root.left) {
      rightHelper(root.left);
    } else if (root.right === null && root.left === null) {
    } else if (root.left === null) {
      right.push(null);
    }
    return right;
  }
  rightHelper(rnode);
  for (let i = 0; i < left.length; i++) {
    if (left[i] === right[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
