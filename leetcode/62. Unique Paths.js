/*
62. Unique Paths
Medium

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?
Above is a 7 x 3 grid. How many possible unique paths are there?

Example 1:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:
Input: m = 7, n = 3
Output: 28
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let a = m+n-2
    let b = m-1
    let c = n-1
    function facto(num) {
        if (num === 0) return 1
        if (num === 1) return 1
        return num * facto(num-1)
    }
    return facto(a) / facto(b) / facto(c)
};

//another solution
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        let array = []
        for (let j = 0; j < m; j++) {
            if (i === 0 || j === 0) {
                array.push(1)
            }
        }
        arr.push(array)
    }
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            arr[i][j] = arr[i-1][j] + arr[i][j-1]
        }
    }
    return arr[n-1][m-1]
};