/*
111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.

Example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
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
 * @return {number}
 */
var minDepth = function (root) {
  // BFS
  // need queue
  // need list
  // due to depth, need to pass object with root
  let queue = [],
    list = [];
  if (!root) return list;
  let current = { root: root, depth: 1 };
  queue.push(current);
  while (queue.length > 0) {
    current = queue.shift();
    list.push(current.root.val);
    if (!current.root.left && !current.root.right) {
      return current.depth;
    }
    if (current.root.left) {
      queue.push({ root: current.root.left, depth: current.depth + 1 });
    }
    if (current.root.right) {
      queue.push({ root: current.root.right, depth: current.depth + 1 });
    }
  }
};
