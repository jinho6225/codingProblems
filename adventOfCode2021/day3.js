const fs = require('fs')
let manipulatedData = null, manipulatedData2 = null

try {
  const data = fs.readFileSync('./day3.txt', 'utf8').split('\n')
  manipulatedData = data
  manipulatedData2 = Array.from(data)
} catch (err) {
  console.error(err)
}

function binaryToDecimal(str) {
    let num = 0
    for (let i = str.length - 1; i >= 0; i--) {
        let curNum = Number(str[i]) * Math.pow(2, str.length - i - 1)
        num += curNum
    }
    return num
}

let map = {};
let len = manipulatedData.length;
for (let i = 0; i < manipulatedData.length; i++) {
    for (let j = 0; j < manipulatedData[i].length; j++) {
        if (manipulatedData[i][j] === "1") {
            if (map[j]) {
                map[j] += 1
            } else {
                map[j] = 1
            }
        }
    }
}
for (let key in map) {
    if (map[key] > len / 2) {
        map[key] = '1'
    } else {
        map[key] = '0'
    }
}
let arr = Object.values(map)

let a = arr.reduce((acc, cur) => acc + cur, '')
let b = arr.map(cur => cur === '1' ? '0' : '1')
b = b.reduce((acc, cur) => acc + cur, '')


console.log('part one:', binaryToDecimal(a) * binaryToDecimal(b))

//10110
//16, + 4 + 2

let numLen = manipulatedData[0].length, j = 0;

while (j < numLen) {

    let i = 0, oxCount = 0, len = manipulatedData.length, ii = 0, coCount = 0, len2 = manipulatedData2.length
    while (i < manipulatedData.length) {
        if (manipulatedData[i][j] === '1') {
            oxCount++
        } 
        i++;
    }
    while (ii < manipulatedData2.length) {
        if (manipulatedData2[ii][j] === '0') {
            coCount++
        } 
        ii++;
    }

    if (manipulatedData.length > 1) {
        if (oxCount >= len / 2) {
            manipulatedData = manipulatedData.filter(val => val[j] === '1')    
        } else {
            manipulatedData = manipulatedData.filter(val => val[j] === '0')    
        }
    }
    if (manipulatedData2.length > 1) {
        if (coCount <= len2 / 2) {
            manipulatedData2 = manipulatedData2.filter(val => val[j] === '0')    
        } else {
            manipulatedData2 = manipulatedData2.filter(val => val[j] === '1')    
        }
    }
    j++;
}


console.log('part two:', binaryToDecimal(manipulatedData[0]) * binaryToDecimal(manipulatedData2[0]))
