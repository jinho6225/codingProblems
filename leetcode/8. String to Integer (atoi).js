/*
8. String to Integer (atoi)
Medium

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
If no valid conversion could be performed, a zero value is returned.
Note:
Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

Example 1:
Input: "42"
Output: 42
Example 2:
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
Example 4:
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
*/

/*
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  debugger;
  str = str.trim();
  let arr = str.split('');
  if (arr.includes(' ')) {
    let idx = arr.indexOf(' ');
    arr = arr.slice(0, idx);
  }
  let array;
  if (str.length === 0) return 0;
  if (str.length > 0) {
    if (
      arr[0] !== '-' &&
      arr[0] !== '+' &&
      typeof arr[0] === 'string' &&
      isNaN(arr[0])
    ) {
      return 0;
    } else if (arr.length === 1 && (arr[0] === '-' || arr[0] === '+')) {
      return 0;
    } else if (arr[0] === '-' || arr[0] === '+') {
      array = arr.splice(0, 1);
    }
  }
  if (isNaN(arr[0])) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') break;
    if (isNaN(arr[i]) === false) {
      if (array === undefined) {
        array = [];
      }
      array.push(arr[i]);
    } else {
      break;
    }
  }
  let result = Number(array.join(''));
  if (result < Math.pow(-2, 31)) {
    result = Math.pow(-2, 31);
    return result;
  } else if (result > Math.pow(2, 31) - 1) {
    result = Math.pow(2, 31) - 1;
    return result;
  }
  return result;
};

var s = '-   234';
myAtoi(s);



/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let negative = false
      let maxNum = Math.pow(2, 31) - 1
      let minNum = Math.pow(2, 31) * -1
      str = str.trim()
      if (str[0] === '-') {
          negative = true
          str = str.substring(1)
      } else if (str[0] === '+') {
          str = str.substring(1)
      }
      let result = ""
      for (let i = 0; i < str.length; i++) {
          if (Number(str[i]) >= 0 && Number(str[i]) <=9 && str[i] !== ' ') {
              result += str[i]
          } else {
              break;
          }
      }
      str = result
      if (!negative) {
          if (Number(str) > maxNum) { 
              return maxNum
      }
          return Number(str)
      } else {

          if (Number(str)* -1 < minNum) {
              return minNum
      }
          return Number(str) * -1
      }

};