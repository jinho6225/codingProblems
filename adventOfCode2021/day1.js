const fs = require('fs')
let manipulatedData = null

try {
  const data = fs.readFileSync('./day1.txt', 'utf8').split('\n').map(val => Number(val))
  manipulatedData = data
} catch (err) {
  console.error(err)
}

let count = 0
for (let i = 1; i < manipulatedData.length; i++) {
    if (manipulatedData[i] > manipulatedData[i-1]) count++
}
console.log('part1 count:',count)


let sumThreeArr = []
for (let i = 0; i < manipulatedData.length; i++) {
    if (i + 2 < manipulatedData.length) {
        sumThreeArr.push(sumThree(manipulatedData, i))
    }
}
function sumThree(arr, i) {
    let sum = 0
    sum = arr[i] + arr[i+1] + arr[i+2]
    return sum
}

let partTwoCount = 0
for (let i = 1; i < sumThreeArr.length; i++) {
    if (sumThreeArr[i] > sumThreeArr[i-1]) partTwoCount++
}
console.log('part2 count:',partTwoCount)