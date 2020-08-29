class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        map = {}
        for x in nums:
            if x in map:
                map[x] += 1
            else:
                map[x] = 1
        for key in map:
            if map[key] == 1:
                return key