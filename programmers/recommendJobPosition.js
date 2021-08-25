function solution(table, languages, preference) {
    var answer = [];
    let newTable = []
    for (let i = 0; i < table.length; i++) {
        newTable.push(table[i].split(' '))
        answer.push([])
    }
    for (let i = 0; i < languages.length; i++) {    
        for (let j = 0; j < newTable.length; j++) {
            if (newTable[j].indexOf(languages[i]) === -1) {
                answer[j].push(0)
            } else {
                let point = convert(newTable[j], newTable[j].indexOf(languages[i]))
                answer[j].push(point * preference[i])
            }
        }
    }
    answer = answer.map((arr, idx) => {
        return arr.reduce((acc, cur) => acc + cur)
    })
    
    let maxNum = Math.max(...answer)
    let arr = []
    for (let i =0; i < answer.length; i++) {
        if (answer[i] === maxNum) arr.push(i)
    }
    arr = arr.map((val, idx) => newTable[val][0])
    if (arr.length === 1) {
        return arr[0]
    } else {
        arr.sort()
        return arr[0]
    }
}


function convert(arr, i) {
    let point;
    if (i === 1) {
        point = 5
    } else if (i === 2) {
        point = 4
    } else if (i === 3) {
        point = 3
    } else if (i === 4) {
        point = 2
    } else if (i === 5) {
        point = 1
    }
    return point
}
