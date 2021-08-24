function solution(scores) {
    var answer = '';
    let individualScoreArr = []
    for (let i = 0; i < scores.length; i++) {
        individualScoreArr.push([])
    }
    for (let i = 0; i < scores.length; i++) {
        for (let j = 0; j < scores[i].length; j++) {
            individualScoreArr[j].push(scores[i][j])
        }
    }
    for (let i = 0; i < individualScoreArr.length; i++) {
        answer += convertGrade(Number(getAvg(individualScoreArr, i)))
    }
    return answer;
}

function getAvg(arr, i) {
    let maxNum = Math.max(...arr[i])
    let minNum = Math.min(...arr[i])
    let maxIdx = arr[i].indexOf(maxNum)
    let maxIdxFromLast = arr[i].lastIndexOf(maxNum)
    let minIdx = arr[i].indexOf(minNum)
    let minIdxFromLast = arr[i].lastIndexOf(minNum)
    if (maxIdx == maxIdxFromLast) {
       if (maxNum === arr[i][i]) {
            arr[i].splice(i, 1)
            return arrAvg(arr[i])
       }
    } 
    if (minIdx === minIdxFromLast) {
        if (minNum === arr[i][i]) {
            arr[i].splice(i, 1)
            return arrAvg(arr[i])
        }
    }
    return arrAvg(arr[i]) 
}

function arrAvg(arr) {
    return arr.reduce((acc, cur) => {
        return acc + cur
    }, 0) / arr.length 
}

function convertGrade(score) {
    let grade = ''
    if (score >= 90) {
        grade = 'A'
    } else if (score >= 80 && 90 > score) {
        grade = 'B'
    } else if (score >= 70 && 80 > score) {
        grade = 'C'
    } else if (score >= 50 && 70 > score) {
        grade = 'D'
    } else if (50 > score) {
        grade = 'F'
    }
    return grade
}