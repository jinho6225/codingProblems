class Solution:
    def climbStairs(self, n: int) -> int:
        lst = [1,2,3]
        if n < 3:
            return lst[n-1]
        else:
            for i in range(3, n):
                lst.append(lst[i-2] + lst[i-1])
            return lst[n-1]    
        
                