# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstFromPreorder(self, preorder: List[int]) -> TreeNode:
            if len(preorder) == 0: return None
            root = preorder[0]
            left = []
            right = []
            for x in preorder[1:]:
                if x < root:
                    left.append(x)
                else:
                    right.append(x)
                
            lnode = self.bstFromPreorder(left)
            rnode = self.bstFromPreorder(right)
            node = TreeNode(root, lnode, rnode)
            return node