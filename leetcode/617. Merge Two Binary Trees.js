/*
617. Merge Two Binary Trees

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input:
	Tree 1         Tree 2
          1             2
         / \           / \
        3   2         1   3
       /               \   \
      5                 4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
Note: The merging process must start from the root nodes of both trees.
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */

var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) {
    t1 = null;
    return t1;
  }
  if (!t1) {
    return t2;
  } else if (!t2) {
    return t1;
  }

  t1.val = t1.val + t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};

var tree1 = {
  val: 1,
  left: null,
  right: null,
};
var tree2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: null,
};

// var tree1 = {
//   val: 1,
//   left: {
//     val: 3,
//     left: {
//       val: 5,
//       left: null,
//       right: null
//     },
//     right: null
//   },
//   right: {
//     val: 2,
//     left: null,
//     right: null
//   }
// }

// var tree2 = {
//   val: 2,
//   left: {
//     val: 1,
//     left: null,
//     right: {
//       val: 4,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     val: 3,
//     left: null,
//     right: {
//       val: 7,
//       left: null,
//       right: null
//     }
//   }
// }

mergeTrees(tree1, tree2);

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  function helper(nodeA, nodeB) {
    if (!nodeA && !nodeB) {
      return null;
    }
    if (!nodeA) {
      return nodeB;
    }
    if (!nodeB) {
      return nodeA;
    }
    let node = new TreeNode(nodeA.val + nodeB.val);
    node.left = helper(nodeA.left, nodeB.left);
    node.right = helper(nodeA.right, nodeB.right);
    return node;
  }
  return helper(t1, t2);
};
