class Solution:
    def firstUniqChar(self, s: str) -> int:
        dic = {}
        for x in s:
            if x not in dic:
                dic[x] = 1
            else:
                dic[x] += 1
        
        for i, x in enumerate(s):
            if dic[x] == 1:
                return i
        return -1
                
