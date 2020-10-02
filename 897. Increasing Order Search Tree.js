/*
897. Increasing Order Search Tree

Given a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.
Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]
       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  
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
var increasingBST = function(root) {
    list = []
    function helper(node) {
        if (!node) return
        if (node.left) helper(node.left)
        list.push(node.val)
        if (node.right) helper(node.right)    
    }
    helper(root)
    
    let node = new TreeNode(list.shift())
    let cur = node
    while(list.length) {
        cur.left = null
        cur.right = new TreeNode(list.shift())
        cur = cur.right
    }
    return node
};
/*
traverse tree via in-order, push node into list array
and generate bst by list array
*/