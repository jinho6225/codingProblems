/*
1038. Binary Search Tree to Greater Sum Tree

Given the root of a binary search tree with distinct values, modify it so that every node has a new value equal to the sum of the values of the original tree that are greater than or equal to node.val.

As a reminder, a binary search tree is a tree that satisfies these constraints:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:
Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]


Constraints:
The number of nodes in the tree is between 1 and 100.
Each node will have value between 0 and 100.
The given tree is a binary search tree.
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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  function traverse(root) {
    if (!root) {
      return false;
    }
    let total = 0;
    if (!root.left && !root.right) {
      return (total += root.val);
    } else {
      total += traverse(root.left);
      total += traverse(root.right);
      return (total += root.val);
    }
  }

  function sum(num) {
    if (num == 0) {
      return 0;
    } else if (num === 1) {
      return 0;
    } else if (num === 2) {
      return num - 1;
    } else if (num > 2) {
      return num - 1 + sum(num - 1);
    }
  }

  let total = traverse(root);

  function changeTree(root, total) {
    if (!root) {
      return false;
    }
    if (!root.left && !root.right) {
      return (root.val = total - sum(root.val));
    } else {
      changeTree(root.left, total);
      changeTree(root.right, total);
      root.val = total - sum(root.val);
    }
    return root;
  }

  return changeTree(root, total);
};

//[4,//1,6,// 0,2,5,7,null,null,null,3,null,null,null,8]
let node = {
  val: 4,
  left: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 6,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: {
        val: 8,
        left: null,
        right: null,
      },
    },
  },
};
bstToGst(node);
