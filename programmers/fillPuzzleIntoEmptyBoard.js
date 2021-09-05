function solution(game_board, table) {
    var answer = 0;
    let emptyPoints = blankPointsFromGame_board(game_board)
    let puzzlePoints = puzzlePointsFromTable(table)
    emptyPoints.sort((a, b) => b.length - a.length)
    puzzlePoints.sort((a, b) => b.length - a.length)
    for (let i = 0; i < emptyPoints.length; i++) {
        let rotatedEmptyPoints = rotate90(emptyPoints[i])
        let k = 0
        while (k < 10) {
            rotatedEmptyPoints = rotate90(rotatedEmptyPoints)            
            k++
        }
        let copiedPuzzlePoints = puzzlePoints.slice()    
        for (let j = 0; j < copiedPuzzlePoints.length; j++) {          
            if (rotatedEmptyPoints.length !== copiedPuzzlePoints[j].length) {
                continue;
            }
            let k = 0, stop = false
            let rotatedPoints = copiedPuzzlePoints[j].slice()            
            while (k < 10) {
                let copiedRotatedEmptyPoints = rotatedEmptyPoints.slice()                   
                if (isSamePoint(copiedRotatedEmptyPoints, rotatedPoints)) {                            
                  answer += rotatedEmptyPoints.length 
                  puzzlePoints.splice(j, 1)
                  stop = true
                  break;
                }
                rotatedPoints = rotate90(rotatedPoints)
                k++
            }
            if (stop) break;
        }
    }    
    return answer;
}

function blankPointsFromGame_board(gameBoard) {
    let answerArr = []
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            if (gameBoard[i][j] === 0) {
                let arr = []

                function checkEmptyPoint(gameBoard, i, j) {
                    if (i < 0 || j < 0 || i > gameBoard.length -1 || j > gameBoard[i].length -1) {
                        return    
                    }
                    if (gameBoard[i][j] === 0) {
                        arr.push([j, i])
                        gameBoard[i][j] = 1            
                        checkEmptyPoint(gameBoard, i-1, j)
                        checkEmptyPoint(gameBoard, i+1, j)
                        checkEmptyPoint(gameBoard, i, j-1)
                        checkEmptyPoint(gameBoard, i, j+1)
                    } else {
                        return
                    }
                }
                checkEmptyPoint(gameBoard, i, j)
                answerArr.push(arr)
            }
        }   
    }
    return answerArr
}

function puzzlePointsFromTable(table) {
    let answerArr = []
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            if (table[i][j] === 1) {
                let arr = []        
                function checkPuzzlePoint(table, i, j) {
                    if (i < 0 || j < 0 || i > table.length -1 || j > table[i].length -1) {
                        return    
                    }
                    if (table[i][j] === 1) {
                        arr.push([j, i])
                        table[i][j] = 0            
                        checkPuzzlePoint(table, i-1, j)
                        checkPuzzlePoint(table, i+1, j)
                        checkPuzzlePoint(table, i, j-1)
                        checkPuzzlePoint(table, i, j+1)
                    } else {
                        return
                    }
                }
                checkPuzzlePoint(table, i, j)
                answerArr.push(arr)
            }
        }   
    }
    return answerArr
}

function rotate90(points) {
    let maxY = 0;
    for (let i = 0; i < points.length; i++) {
        if (points[i][1] > maxY) maxY = points[i][1]
    }
    let rotatedPoints = points.map(point => [maxY - point[1], point[0]])
    return rotatedPoints
}


function isSamePoint(point1, point2) {
    let flag = false
    if (point1.length !== point2.length) return flag
    let a = point1.slice()
    let b = point2.slice()    
    while(a.length) {
        const point2 = a.pop();
        const pointIndex = b.findIndex(point1 => point1[0] === point2[0] && point1[1] === point2[1])
        if (pointIndex < 0) return flag;
        b.splice(pointIndex, 1);
    }
    flag = true
    return flag
}

// let game_board = [[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]]	
// let table = [[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]

// // game_board = [[0,0,0],[1,1,0],[1,1,1]]
// // table = [[1,1,1],[1,0,0],[0,0,0]]
// solution(game_board, table)