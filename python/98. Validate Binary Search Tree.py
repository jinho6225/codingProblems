# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        if root == None:
            return True
        cur = root
        positive_infnity = float('inf') 
        negative_infnity = float('-inf')
        self.flag = True
        def helper(node, min, max):
            if node.val <= min or node.val >= max:
                self.flag = False
            if node.left:
                helper(node.left, min, node.val)
            if node.right:
                helper(node.right, node.val, max)
        helper(cur, negative_infnity, positive_infnity)
        return self.flag