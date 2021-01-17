/**
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]
Check out the image below for better understanding:



Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix

A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 100,
2 ≤ matrix[0].length ≤ 100.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.

[JavaScript] Syntax Tips
 */

function minesweeper(matrix) {
    let results = []
    for (let i = 0; i < matrix.length; i++) {
        let result = []
        for (let j = 0; j < matrix[i].length; j++) {
            let num = helper(matrix, i, j)
            result.push(num)
        }
        results.push(result)
    }
    return results
}

/**
check around cell if there is true(total 8 direction, except itself),
    count true total and total number should be itself
iterate array
    iterate array
        check using helper function
            passing arr and i, j index in order to check 8 directions            
            (i-1, j-1)
            (i, j-1)
            (i+1, j-1)
            (i-1, j)
            (i+1, j)
            (i-1, j+1)
            (i, j+1)
            (i+1, j+1)
            if exist, check 8directions         
*/
function helper(arr, i, j) {
    let count = 0
    if (arr[i-1] !== undefined && arr[i-1][j-1] !== undefined && arr[i-1][j-1]) count++
    if (arr[i-1] !== undefined && arr[i-1][j] !== undefined && arr[i-1][j]) count++
    if (arr[i-1] !== undefined && arr[i-1][j+1] !== undefined && arr[i-1][j+1]) count++
    if (arr[i] !== undefined && arr[i][j-1] !== undefined && arr[i][j-1]) count++
    if (arr[i] !== undefined && arr[i][j+1] !== undefined && arr[i][j+1]) count++
    if (arr[i+1] !== undefined && arr[i+1][j-1] !== undefined && arr[i+1][j-1]) count++
    if (arr[i+1] !== undefined && arr[i+1][j] !== undefined && arr[i+1][j]) count++
    if (arr[i+1] !== undefined && arr[i+1][j+1] !== undefined && arr[i+1][j+1]) count++
    return count
}