# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if root == None:
            return 0
        self.max = 1
        cur = root
        self.count = 0
        def helper(node, count):            
            if node is None:
                return 0
            count += 1
            if count > self.max:
                self.max = count
            if node.left:
                helper(node.left, count)
            if node.right:
                helper(node.right, count)
        helper(cur, self.count)
        return self.max