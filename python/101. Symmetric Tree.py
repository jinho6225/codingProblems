#recursively

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if root == None:
            return True
        def helper(lnode, rnode):
            if lnode == None and rnode == None:
                return True
            if lnode == None or rnode == None:
                return False
            if lnode.val != rnode.val:
                return False
            return helper(lnode.left, rnode.right) and helper(lnode.right, rnode.left)
        return helper(root.left, root.right)


#iteratively

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if root is None:
            return True
        cur1 = root
        cur2 = root
        queue1 =[]
        queue2 =[]
        queue1.append(cur1) 
        queue2.append(cur2) 
        while len(queue1) and len(queue2):
            cur1 = queue1.pop(0)
            cur2 = queue2.pop(0)
            if cur1.val != cur2.val:
                return False
            if cur1.left == None and cur2.right:
                  return False
            elif cur1.left and cur2.right == None:
                  return False
                
            if cur1.left:
                queue1.append(cur1.left) 
            if cur2.right:
                queue2.append(cur2.right)
            if cur1.right:
                queue1.append(cur1.right)
            if cur2.left:
                queue2.append(cur2.left)   
        return True    