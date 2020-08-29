class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dic = {}
        for x in nums1:
            if x not in dic:
                dic[x] = 1;
            else:
                dic[x] += 1;
        
        result = []
        for x in nums2:
            if x in dic and dic[x] > 0:
                result.append(x)
                dic[x] -= 1
        return result