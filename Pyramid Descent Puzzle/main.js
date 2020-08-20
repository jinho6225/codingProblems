// Read file and make 2D array.
const fs = require('fs');
const data = fs.readFileSync('./pyramid_sample_input.txt', {encoding:'utf8', flag:'r'}); 
let arr = data.split('\n')
let nestedArr = arr.map((ele) => {
  if (ele.includes('\r')) {
    let index = ele.indexOf('\r')
    ele = ele.slice(0, index)
    return ele
  } else {
    return ele
  }
})
nestedArr = nestedArr.map((ele) => ele.split(','))
let target = Number(nestedArr[0][0].substring(7))
nestedArr = nestedArr.slice(1)
console.log(nestedArr);


// Generate all possible paths.
let paths = function(num) {
  let arr = ['L', 'R']
  let result = []
  let newArr = [];
  if (num === 1) {
    return arr
  } else if (num === 2) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        newArr.push(arr[i]+arr[j])
      }
    }
    return newArr
  } else if (num > 2) {
    for (let i = 0; i < arr.length; i++) {
      newArr = [];
      newArr = newArr.concat(paths(num-1))
      for (let j = 0; j < newArr.length; j++) {
        result.push(arr[i] + newArr[j])
      }
    }
    return result
  }
}
let num = nestedArr.length - 1
let possible = paths(num)
console.log(possible)


// check the paths with target.
let result = null
for (let i = 0; i < possible.length; i++) {
  let pos = 0
  let value = nestedArr[0][pos]
  for (let j = 0; j < possible[i].length; j++) {
    if (possible[i][j] == 'R') {
      pos += 1
    } 
    value *= nestedArr[j+1][pos]
  }
  if (value == target) {
    result = possible[i]
    break;
  }
}
console.log(result)

fs.writeFileSync("./pyramid_output.txt", result); 
