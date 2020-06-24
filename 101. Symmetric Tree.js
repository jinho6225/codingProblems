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
  if (!root) return true;
  let leftList = [];
  let queue = [];
  let cur = root;
  queue.push(cur);
  while (queue.length !== 0) {
    cur = queue.shift();
    if (cur === null) {
      leftList.push(null);
      continue;
    } else {
      leftList.push(cur.val);
    }
    if (cur.left) {
      queue.push(cur.left);
    } else if (!cur.left && !cur.right) {
      queue.push(null);
    } else {
      queue.push(null);
    }
    if (cur.right) {
      queue.push(cur.right);
    } else if (!cur.left && !cur.right) {
      queue.push(null);
    } else {
      queue.push(null);
    }
  }

  let rightList = [];
  let queue2 = [];
  let cur2 = root;
  queue2.push(cur2);
  while (queue2.length !== 0) {
    cur2 = queue2.shift();
    if (cur2 === null) {
      rightList.push(null);
      continue;
    } else {
      rightList.push(cur2.val);
    }

    if (cur2.right) {
      queue2.push(cur2.right);
    } else if (!cur2.left && !cur2.right) {
      queue2.push(null);
    } else {
      queue2.push(null);
    }
    if (cur2.left) {
      queue2.push(cur2.left);
    } else if (!cur2.left && !cur2.right) {
      queue2.push(null);
    } else {
      queue2.push(null);
    }
  }
  let i = 0;
  while (i < leftList.length) {
    if (leftList[i] !== rightList[i]) return false;
    i++;
  }
  return true;
};

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
  let isSymmetric = true;
  if (!root) return isSymmetric;
  let compare = (leftRoot, rightRoot) => {
    if (!leftRoot && !rightRoot) return;
    if (!leftRoot) {
      if (rightRoot) {
        isSymmetric = false;
        return;
      }
    }
    if (!rightRoot) {
      if (leftRoot) {
        isSymmetric = false;
        return;
      }
    }
    if (leftRoot.val !== rightRoot.val) {
      isSymmetric = false;
      return;
    }
    compare(leftRoot.left, rightRoot.right);
    compare(leftRoot.right, rightRoot.left);
  };
  compare(root.left, root.right);
  return isSymmetric;
};
