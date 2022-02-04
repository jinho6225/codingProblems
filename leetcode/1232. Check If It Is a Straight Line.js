/*
1232. Check If It Is a Straight Line
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Example 2:
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

Constraints:
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
*/

/*
 * @param {number[][]} coordinates
 * @return {boolean}
 */

//shorter code - better than before
var checkStraightLine = function (coordinates) {
  coordinates.sort((a, b) => a[0] - b[0]);
  let horizon = coordinates.map((coord) => coord[0]);
  let vertical = coordinates.map((coord) => coord[1]);
  let horiz = Array.from(new Set(horizon));
  let vertic = Array.from(new Set(vertical));
  if (horiz.length === 1 && vertic.length === 1) {
    return false;
  } else if (horiz.length === 1) {
    return true;
  } else if (vertic.length === 1) {
    return true;
  }
  let result = [];
  for (let i = 0; i < horizon.length - 1; i++) {
    let hori = horizon[i + 1] - horizon[i];
    let verti = vertical[i + 1] - vertical[i];
    result.push(hori / verti);
  }
  result = Array.from(new Set(result));
  if (result.length > 1) {
    return false;
  } else {
    return true;
  }
};

var checkStraightLine = function (coordinates) {
  let xIncrease = [];
  let yIncrease = [];
  for (let i = 1; i < coordinates.length; i++) {
    if (coordinates[i][0] - coordinates[i - 1][0]) {
      xIncrease.push(coordinates[i][0] - coordinates[i - 1][0]);
    } else {
      continue;
    }
    if (coordinates[i][1] - coordinates[i - 1][1]) {
      yIncrease.push(coordinates[i][1] - coordinates[i - 1][1]);
    } else {
      continue;
    }
  }
  if (xIncrease.length === 0 && yIncrease.length === 0) {
    return false;
  } else if (xIncrease.length === 0) {
    for (let i = 0; i < yIncrease.length - 1; i++) {
      if (yIncrease[i] !== yIncrease[i + 1]) {
        return true;
      }
    }
  } else if (yIncrease.length === 0) {
    for (let i = 0; i < xIncrease.length - 1; i++) {
      if (xIncrease[i] !== xIncrease[i + 1]) {
        return true;
      }
    }
  } else {
    for (let i = 0; i < xIncrease.length - 1; i++) {
      let xline = xIncrease[i + 1] - xIncrease[i];
      let yline = yIncrease[i + 1] - yIncrease[i];
      if (xline !== 0 || yline !== 0) {
        if (yline % xline !== 0) {
          return false;
        }
      }
    }
  }
  return true;
};

// var coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
// var coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// var coordinates = [[-3,-2],[-1,-2],[2,-2],[-2,-2],[0,-2]]
var coordinates = [
  [0, 1],
  [1, 3],
  [-4, -7],
  [5, 11],
];
checkStraightLine(coordinates);
