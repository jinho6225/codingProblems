/**
 *
Medium
Codewriting

Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.
Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

Example

For inputArray = ["aba", "bbb", "bab"], the output should be
stringsRearrangement(inputArray) = false.

There are 6 possible arrangements for these strings:

["aba", "bbb", "bab"]
["aba", "bab", "bbb"]
["bbb", "aba", "bab"]
["bbb", "bab", "aba"]
["bab", "bbb", "aba"]
["bab", "aba", "bbb"]
None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

For inputArray = ["ab", "bb", "aa"], the output should be
stringsRearrangement(inputArray) = true.

It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

Input/Output

[execution time limit] 5 seconds (ts)

[input] array.string inputArray

A non-empty array of strings of lowercase letters.

Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 15.

[output] boolean

Return true if the strings can be reordered in such a way that each neighbouring pair of strings differ by exactly one character (false otherwise).
 */

function stringsRearrangement(arr) {
  function helper(arr) {
    if (arr.length === 2) {
      let temp = arr.slice();
      return [arr, temp.reverse()];
    }
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      let copied = arr.slice();
      copied.splice(i, 1);
      let returnedResult = helper(copied);
      for (let j = 0; j < returnedResult.length; j++) {
        let concated = [arr[i], ...returnedResult[j]];
        resultArr.push(concated);
      }
    }
    return resultArr;
  }

  let newArr = helper(arr);
  for (let i = 0; i < newArr.length; i++) {
    let flag = true;

    for (let j = 0; j < newArr[i].length - 1; j++) {
      if (!check(newArr[i][j], newArr[i][j + 1])) {
        flag = false;
        break;
      }
    }
    if (flag) return true;
  }
  return false;
}

function check(str1, str2) {
  let tol = 1,
    i = 0;
  while (i < str1.length) {
    if (str1[i] !== str2[i]) {
      tol--;
      if (tol < 0) return false;
    }
    i++;
  }
  if (tol === 1) return false;
  return true;
}
