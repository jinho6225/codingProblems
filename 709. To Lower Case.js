/*
709. To Lower Case

Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:
Input: "Hello"
Output: "hello"
Example 2:
Input: "here"
Output: "here"
Example 3:
Input: "LOVELY"
Output: "lovely"
*/

/*
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    let charCodeNum = strArr[i].charCodeAt();
    if (charCodeNum < 65 || charCodeNum > 122) {
      continue;
    } else if (charCodeNum < 97) {
      charCodeNum = strArr[i].charCodeAt() + 32;
    }
    strArr[i] = String.fromCharCode(charCodeNum);
  }
  return strArr.join('');
};

var input = 'al&phaBET';
console.log(toLowerCase(input));
