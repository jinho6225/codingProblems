/*
49. Group Anagrams
Medium

Given an array of strings, group anagrams together.
Example:
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:
All inputs will be in lowercase.
The order of your output does not matter.
*/

/*
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let obj = {};
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    let arr = strs[i].split('').sort();
    let key = arr.join('');
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(strs[i]);
  }
  for (let key in obj) {
    result.push(obj[key]);
  }
  return result;
};
var input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// var input = ["tea","","eat","","tea",""]
// var input = ['','']
// var input = ["tea","and","ace","ad","eat","dans"]

groupAnagrams(input);

// var groupAnagrams = function(strs) {
//   let anwser = []
//   let result = []
//   if (strs.length === 0) {
//     return anwser;
//   }
//   if (strs.length === 1) {
//     result.push(strs[0])
//     anwser.push(result)
//     return anwser
//   }
//   if (strs.includes('')) {
//     while (strs.includes('')) {
//       let index = strs.indexOf('')
//       result.push(strs[index])
//       strs.splice(index,1)
//     }
//     anwser.push(result)
//   }

//   if (strs.length > 1) {
//     let lengthArr = strs.map(ele => ele.length)
//     let index = lengthArr.indexOf(Math.min(...lengthArr))
//     let arr = strs[index].split('')
//     let strArr = strs.slice()
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < strArr.length; j++) {
//         if (strArr[j].includes(arr[i])) {
//           let index = strArr[j].indexOf(arr[i])
//           strArr[j] = strArr[j].substring(0,index) + strArr[j].substring(index+1)
//         }
//       }
//     }
//     result = [];
//     while(strArr.includes('')) {
//       let index = strArr.indexOf('')
//       result.push(strs[index])
//       strs.splice(index,1)
//       strArr.splice(index,1)
//     }
//     anwser.push(result)
//   }
//   return anwser.concat(groupAnagrams(strs))
// };
