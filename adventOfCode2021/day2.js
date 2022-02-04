const fs = require('fs')
let manipulatedData = null

try {
  const data = fs.readFileSync('./day2.txt', 'utf8').split('\n').map(val => val.split(' '))
  manipulatedData = data
} catch (err) {
  console.error(err)
}

let map = {}
for (let i = 0; i < manipulatedData.length; i++) {

    if (map[manipulatedData[i][0]]) {
        map[manipulatedData[i][0]].push(Number(manipulatedData[i][1]))
    } else {
        map[manipulatedData[i][0]] = [Number(manipulatedData[i][1])]
    }
}
for (let key in map) {
    let sum = map[key].reduce((acc, cur) => acc + cur, 0)
    map[key] = [sum]
}
let depth = map['down'][0] + (-map['up'][0])
console.log('part1 result:', map['forward'] * depth)

let partTwoMap = { currentDepth: 0, forward: 0, depth: 0, totalDepth: 0 }
for (let i = 0; i < manipulatedData.length; i++) {
    if (manipulatedData[i][0] === 'forward') {
        partTwoMap['forward'] += Number(manipulatedData[i][1])
        partTwoMap['currentDepth'] = partTwoMap['depth'] * Number(manipulatedData[i][1])
        partTwoMap['totalDepth'] += partTwoMap['currentDepth']
    } else if (manipulatedData[i][0] === 'down') {
        partTwoMap['depth'] += Number(manipulatedData[i][1])
        partTwoMap['currentDepth'] = partTwoMap['depth']
    } else if (manipulatedData[i][0] === 'up') {
        partTwoMap['depth'] -= Number(manipulatedData[i][1])
    }
    console.log(partTwoMap)
}
console.log('part2 result:', partTwoMap['forward'] * partTwoMap['totalDepth'])