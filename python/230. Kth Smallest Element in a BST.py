# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        lst = []
        def helper(root):
            if root is None:
                return None
            if root.left:
                helper(root.left)
            lst.append(root.val)
            if root.right:
                helper(root.right)
        helper(root)
        return lst[k-1]