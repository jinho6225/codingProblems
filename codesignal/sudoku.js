function sudoku(grid) {
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (j === 8) {
                let row = checkRow(grid, i, j)
                if (!row) return false
            }
            if (i === 8) {
                let col = checkCol(grid, 8, j)
                if (!col) return false
            }
            if (i % 3 === 0 && j % 3 === 0) {
                let sqar = checkSubSquare(grid, i, j)
                if (!sqar) return false
            }
        }
    }
    return true
}

function checkRow(grid, i, j) {
    let arr = [], x=0;
    while (x <= j) {
        if (!arr.includes(grid[i][x])) {
            arr.push(grid[i][x])
        } else {
            return false
        }
        x++
    }
    return true
}
function checkCol(grid, i, j) {
    let arr = [], x = 0
    while (x <= i) {
        if (!arr.includes(grid[x][j])) {
            arr.push(grid[x][j])
        } else {
            return false
        }
        x++
    }
    return true   
}
function checkSubSquare(grid, i, j) {
    let arr = [];
    for (let a = i; a < i+3; a++) {
        for (let b = j; b < j+3; b++) {
             if (!arr.includes(grid[a][b])) {
                arr.push(grid[a][b])
            } else {
                return false
            }
        }
    }
    return true
}