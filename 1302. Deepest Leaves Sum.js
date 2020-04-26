/*
1302. Deepest Leaves Sum
Medium
Given a binary tree, return the sum of values of its deepest leaves.

Example 1:
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Constraints:
The number of nodes in the tree is between 1 and 10^4.
The value of nodes is between 1 and 100.
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
 * @return {number}
 */

//Runtime: 72 ms, faster than 98.99% of JavaScript online submissions for Deepest Leaves Sum.
var deepestLeavesSum = function (root) {
  let deepestLevel = 0;
  let sum = 0;
  function table(root, count = 0) {
    if (!root) {
      return false;
    }
    if (!root.left && !root.right) {
      if (deepestLevel === count) {
        sum = sum + root.val;
      } else if (deepestLevel < count) {
        deepestLevel = count;
        sum = root.val;
      }
    } else {
      count++;
      table(root.left, count);
      table(root.right, count);
    }
    return;
  }
  table(root);
  return sum;
};

var node = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 7,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 6,
      left: null,
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
};
deepestLeavesSum(node);
