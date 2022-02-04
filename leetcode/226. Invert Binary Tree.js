/*
226. Invert Binary Tree

Invert a binary tree.
Example:
Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:
Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {TreeNode}
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  function helper(root) {
    if (!root) return null;
    if (root.left && root.right) {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
    } else if (root.left && !root.right) {
      let temp = root.left;
      root.left = null;
      root.right = temp;
    } else if (!root.left && root.right) {
      let temp = root.right;
      root.left = temp;
      root.right = null;
    }

    if (root.left) {
      helper(root.left);
    }
    if (root.right) {
      helper(root.right);
    }
  }
  helper(root);
  return root;
};

var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  if (root) {
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  }
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

var node = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};
invertTree(node);
