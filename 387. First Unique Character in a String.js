/*
387. First Unique Character in a String
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:
s = "leetcode"
return 0.
s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/*
 * @param {string} s
 * @return {number}
 */

//96ms
var firstUniqChar = function (s) {
  debugger;
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = [];
      obj[s[i]].push(i);
    } else {
      obj[s[i]].push(i);
    }
  }
  for (let i in obj) {
    if (obj[i].length === 1) {
      return obj[i][0];
    }
  }
  return -1;
};

var s = 'loveleetcode';
firstUniqChar(s);

//124ms
// var firstUniqChar = function(s) {
//   debugger;
//   let arr = s.split('')
//   let obj = {}
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1
//     } else {
//       obj[arr[i]]++
//     }
//   }
//   let a = new Set(arr)
//   let newArr = Array.from(a)
//   for (let key in obj) {
//     let ltr = newArr.shift()
//     if (obj[ltr] === 1) {
//       return arr.indexOf(ltr)
//     }
//   }
//   return -1
// };

//super slow code .....;;
//8420ms
// var firstUniqChar = function(s) {
//     let arr = s.split('')
//     for (let i = 0; i < arr.length; i++) {
//       let newArr = arr.slice()
//       newArr.splice(i,1)
//       if (!newArr.includes(arr[i])) {
//         let idx = arr.indexOf(arr[i])
//         return idx
//       }
//     }
//     return -1
// };

/*
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {}
  for (let i = 0; i < s.length; i++) {
      if (s[i] in obj) {
          obj[s[i]].val += 1
      } else {
          obj[s[i]] = {val: 1, idx: i}
      }
  }
  let result, last = Infinity;
  for (let key in obj) {
      if (obj[key].val === 1 && obj[key].idx < last) {
          last = obj[key].idx
          result = obj[key].val
      }
  }
  if (!result) return -1
  return last
};