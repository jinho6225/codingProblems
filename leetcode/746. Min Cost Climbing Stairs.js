/*
746. Min Cost Climbing Stairs

On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).
Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.
Example 1:
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
Example 2:
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
Note:
cost will have a length in the range [2, 1000].
Every cost[i] will be an integer in the range [0, 999].
*/

/*
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
  if (cost.length === 0) return 0;
  if (cost.length < 3) {
    return Math.min(...cost);
  } else {
    for (let i = 2; i < cost.length; i++) {
      if (cost[i - 2] < cost[i - 1]) {
        cost[i] += cost[i - 2];
      } else {
        cost[i] += cost[i - 1];
      }
    }
  }
  return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
};

var minCostClimbingStairs = function (cost) {
  /*
start could be index 0 or 1
need to check cost length and need to over that length then end
i could manipulate array
array each element will be implemented by result

cost = [1, 100, 2, 3, 3, 103, 4, 5, 104, 6]
*/
  if (cost.length === 0) return 0;
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return Math.max(cost[0], cost[1]);
  if (cost.length === 3) return Math.max(cost[0] + cost[2], cost[1]);

  if (cost.length > 3) {
    let min = Math.min(cost[0], cost[1]);
    cost[2] = min + cost[2];
    for (let i = 3; i < cost.length; i++) {
      if (cost[i - 2] < cost[i - 1]) {
        cost[i] += cost[i - 2];
      } else {
        cost[i] += cost[i - 1];
      }
    }
  }
  return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
};
