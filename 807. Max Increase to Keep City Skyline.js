/*
807. Max Increase to Keep City Skyline
Medium

In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well.
At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.
What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation:
The grid is:
[ [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

Notes:

1 < grid.length = grid[0].length <= 50.
All heights grid[i][j] are in the range [0, 100].
All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] rectangular prism.
*/

/*
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  //get row level highest number array
    let rowArr = []
    for (let i = 0; i < grid.length; i++) {
      let rowBigNum = grid[i][0]
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] > rowBigNum) {
          rowBigNum = grid[i][j]
        }
      }
      rowArr.push(rowBigNum)
    }
  //get col level highest number array
    var colArr = []
    let i = 0
    var k = 0
    while (k < grid.length) {
      var colNum = grid[i][k]
      while (i < grid[k].length) {
        if (grid[i][k] > colNum) {
          colNum = grid[i][k]
          i++
        } else {
          i++
        }
      }
      colArr.push(colNum)
      k++
      i = 0;
    }
  //using both array to make grid again
    let result = []
    for (let i = 0; i < colArr.length; i++) {
      let array = []
      for (let j = 0; j < rowArr.length; j++) {
        if (colArr[i] > rowArr[j]) {
          array.push(rowArr[j])
        } else {
          array.push(colArr[i])
        }
      }
      result.push(array)
      array = []
    }

  //make a function to get total
  var arraySum = function(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArr.push(array[i])
    } else {
      newArr = newArr.concat(array[i])
    }
  }
    var total = 0;
    newArr.forEach(function(e) {
    total = total + e;
  })
  return total;
  }

  return arraySum(result) - arraySum(grid)
};
