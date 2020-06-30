/*
200. Number of Islands
Medium

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input:
11110
11010
11000
00000
Output: 1
Example 2:
Input:
11000
11000
00100
00011
Output: 3
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  function helper(arr, i, j, H, V) {
    if (i < 0 || j < 0 || i === H || j === V) return;
    if (arr[i][j] === '0') return;
    if (arr[i][j] === '1') {
      arr[i][j] = '0';
    }
    helper(arr, i - 1, j, H, V);
    helper(arr, i + 1, j, H, V);
    helper(arr, i, j - 1, H, V);
    helper(arr, i, j + 1, H, V);
  }
  let rowLen = grid.length;
  for (let i = 0; i < grid.length; i++) {
    let colLen = grid[i].length;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        helper(grid, i, j, rowLen, colLen);
      }
    }
  }
  return count;
};
