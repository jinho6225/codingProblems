/*
17. Letter Combinations of a Phone Number
Medium

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/*
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function (digits) {
  let table = new Map();
  table.set('1', []);
  table.set('2', ['a', 'b', 'c']);
  table.set('3', ['d', 'e', 'f']);
  table.set('4', ['g', 'h', 'i']);
  table.set('5', ['j', 'k', 'l']);
  table.set('6', ['m', 'n', 'o']);
  table.set('7', ['p', 'q', 'r', 's']);
  table.set('8', ['t', 'u', 'v']);
  table.set('9', ['w', 'x', 'y', 'z']);

  if (digits === '') {
    return [];
  } else if (digits.length === 1) {
    return table.get(digits);
  }

  let arr = digits.split('');
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    store.push(table.get(arr[i]));
  }

  function recur(arr) {
    debugger;
    if (arr.length === 2) {
      let a = [];
      for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr[1].length; j++) {
          a.push(arr[0][i] + arr[1][j]);
        }
      }
      return a;
    } else if (arr.length > 2) {
      let a = [];
      for (let i = 0; i < arr[0].length; i++) {
        let array = recur(arr.slice(1));
        for (let j = 0; j < array.length; j++) {
          a.push(arr[0][i] + array[j]);
        }
      }
      return a;
    }
  }
  return recur(store);
};

var input = '2';
letterCombinations(input);
// //Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
