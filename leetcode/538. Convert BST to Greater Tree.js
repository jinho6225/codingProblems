/*
538. Convert BST to Greater Tree

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
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

var convertBST = function (root) {
  let sum = 0;

  function helper(root) {
    if (!root) {
      return false;
    }
    if (!root.right && !root.left) {
      sum = sum + root.val;
      root.val = sum;
      return;
    } else {
      helper(root.right);
      sum = sum + root.val;
      root.val = sum;
      helper(root.left);
    }
    return;
  }
  helper(root);

  return root;
};

var node = {
  val: 5,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 13,
    left: null,
    right: null,
  },
};
// var node = {
//   val: 2,
//   left: null,
//   right: null
// }
convertBST(node);
