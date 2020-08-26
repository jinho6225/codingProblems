# 283. Move Zeroes

# Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Example:
# Input: [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Note:
# You must do this in-place without making a copy of the array.
# Minimize the total number of operations.

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        po1 = 0 #1/2
        po2 = 0 #1/2/3/4
        while po2 < len(nums): #5
            if nums[po2] != 0:
                nums[po1], nums[po2] = nums[po2], nums[po1]                
                po1 += 1                
            po2 += 1

            

            