/*
1351. Count Negative Numbers in a Sorted Matrix

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0
Example 3:
Input: grid = [[1,-1],[-1,-1]]
Output: 3
Example 4:
Input: grid = [[-1]]
Output: 1

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
*/

/*
 * @param {number[][]} grid
 * @return {number}
 */

// Runtime: 52 ms, faster than 91.36% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
var countNegatives = function (grid) {
  let arr = [];
  for (let i = 0; i < grid.length; i++) {
    arr = arr.concat(grid[i]);
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) total += 1;
  }
  return total;
};

var grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];
console.log(countNegatives(grid));

//Runtime: 100 ms, faster than 5.40% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
// var countNegatives = function(grid) {
// var total = 0;
// for (let i = 0; i < grid.length; i++) {
//   console.log(grid[i])
//   for (let j = 0; j < grid[i].length; j++) {
//     if(grid[i][j] < 0) {
//       total += 1
//     }
//   }
// }
// return total
// };
