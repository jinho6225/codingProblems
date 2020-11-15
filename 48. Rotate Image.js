/*
48. Rotate Image

You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).

Note:
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],
rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let map = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!map[j]) {
        map[j] = [];
        map[j].push(matrix[i][j]);
      } else {
        map[j].push(matrix[i][j]);
      }
    }
  }
  let i = 0;
  let arr = [];
  while (i < matrix.length) {
    arr.push(map[i].reverse());
    i++;
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = arr[i][j];
    }
  }
  return matrix;
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);


// 11/14/2020

/*
  O(n^2)
  O(n)
*/
var rotate = function(matrix) {
  matrix.reverse()
  let object = {}
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          if (j in object) {
              object[j].push(matrix[i][j])
          } else {
              object[j] = []
              object[j].push(matrix[i][j])
          }
      }
  }
  for (let i  = 0; i < matrix.length; i++) {
      if (i in object) {
          matrix[i] = object[i]
      }
  }
};
//[[1,2,3],[4,5,6],[7,8,9]] => [[7,8,9],[4,5,6],[1,2,3]]
//                               0,1,2   0,1,2   0,1,2
//[[7,4,1],[8,5,2],[9,6,3]] => [[7,4,1],[8,5,2],[9,6,3]]
//                                 0       1       2
//reverse matrix
/*
define empty object
iterate array matrix
  iterate array matrix[i]
      if object has j index property
          current element push into that array
      if not,
          assign property as j index and value is empaty array
          current element push into that array
          
*/