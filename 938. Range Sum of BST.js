/*
938. Range Sum of BST

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

Note:
The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

//Runtime: 136 ms, faster than 99.82% of JavaScript online submissions for Range Sum of BST.

var rangeSumBST = function (root, L, R) {
  let sum = 0;
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    if (root.val >= L && root.val <= R) {
      sum += root.val;
    }
  } else {
    sum = sum + rangeSumBST(root.left, L, R);
    sum = sum + rangeSumBST(root.right, L, R);
    if (root.val >= L && root.val <= R) {
      sum += root.val;
    }
  }
  return sum;
};

var root = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
  right: {
    val: 15,
    left: null,
    right: {
      val: 18,
      left: null,
      right: null,
    },
  },
};

rangeSumBST(root, 7, 15);
