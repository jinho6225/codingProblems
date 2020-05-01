/*
121. Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.

Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */

//Runtime: 56 ms, faster than 85.26% of JavaScript online submissions for Best Time to Buy and Sell Stock.
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let max = 0;
  let diff = 0;
  prices.reduce((acc, cur, idx) => {
    if (cur < acc) {
      acc = cur;
      return acc;
    }
    if (cur > acc) {
      diff = cur - acc;
      if (diff > max) {
        max = diff;
      }
      return acc;
    } else {
      acc = cur;
      return acc;
    }
  });
  return max;
};

//Runtime: 312 ms, faster than 18.04% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// O(n^2)
var maxProfit = function (prices) {
  let profit = 0,
    max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        continue;
      } else {
        profit = prices[j] - prices[i];
        if (profit > max) {
          max = profit;
        }
      }
    }
  }
  return max;
};

// var input = [7,1,5,3,6,4]
// var input = [7,6,4,3,1]
// var input = [3,2,6,5,0,3]
// var input = [2,4,1]
var input = [2, 1, 2, 1, 0, 1, 2];
maxProfit(input);
