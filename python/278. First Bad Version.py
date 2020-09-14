# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        start = 1
        last = n
        while start < last:
            mid = math.floor((start+last)/2)
            if isBadVersion(mid):
                print(last, 'last')
                last = mid
                
            else:
                start = mid+1