/*
112. Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.
Example:
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

//Runtime: 52 ms, faster than 98.86% of JavaScript online submissions for Path Sum.
var hasPathSum = function (root, sum) {
  debugger;
  let arr = [];
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    sum = sum - root.val;
    if (sum === 0) {
      arr.push(true);
      return arr;
    }
  } else {
    arr = arr.concat(hasPathSum(root.left, sum - root.val));
    arr = arr.concat(hasPathSum(root.right, sum - root.val));
  }

  return arr.includes(true);
};

var node = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
    right: null,
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
};

hasPathSum(node, 22);
// hasPathSum([], 1)

//Runtime: 52 ms
var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    sum = sum - root.val;
    if (sum === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return (
      hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
    );
  }
};
