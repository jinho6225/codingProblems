function chessKnight(cell) {
    let chessMap = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    }
    let cellArr = cell.split('')
    return calculate(Number(chessMap[cellArr[0]]), Number(cellArr[1]))
}

function calculate(positionX, positionY) {
    let count = 0
    let possibleMovement = [
        [-2, +1],
        [-2, -1],
        [-1, +2],
        [+1, +2],
        [+2, +1],
        [+2, -1],
        [+1, -2],
        [-1, -2]
    ]
    for (let i = 0; i < possibleMovement.length; i++) {
        let tempX = Number(possibleMovement[i][0])
        let tempY = Number(possibleMovement[i][1])
        if (tempX + positionX > 0 && tempX + positionX < 9 && tempY + positionY > 0 && tempY + positionY < 9) {
            count++
        }
    }
    return count
}