/*
118. Pascal's Triangle
Easy

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
as i can see example, result will be nested array
we need loop until numRows
my pseudocode below
    define empty array as arr
    for loop i equal 1 and i less than and equal to numRows. i increment by 1
    define empty array as array
    iterate nested for loop
    j equal 1, j less than and equal to i. j increment by 1
        if i less than 3
            1 push into array
        else
            if j equal 1
                1 push into array
            else if (j equal i (length-1))
                1 push into array
            else
                arr[i-2][j-1] + arr[i-2][j-2] result will be push into array
    array.push into arr
return arr

problems is this solution is slow - O(n^2)
*/

var generate = function (numRows) {
  let arr = [];
  for (let i = 1; i <= numRows; i++) {
    let array = [];
    for (let j = 1; j <= i; j++) {
      if (i < 3) {
        array.push(1);
      } else {
        if (j === 1) {
          array.push(1);
        } else if (j === i) {
          array.push(1);
        } else {
          array.push(arr[i - 2][j - 1] + arr[i - 2][j - 2]);
        }
      }
    }
    arr.push(array);
  }
  return arr;
};
