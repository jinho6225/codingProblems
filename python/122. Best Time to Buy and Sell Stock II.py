class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        totalProfit = 0;
        i = 0
        while i < len(prices)-1:
            if prices[i] < prices[i+1]:
                sum = (prices[i+1] - prices[i])
                totalProfit = totalProfit + sum
            i += 1
        return totalProfit 