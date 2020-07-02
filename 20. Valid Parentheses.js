/*
20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:
Input: "()"
Output: true
Example 2:
Input: "()[]{}"
Output: true
Example 3:
Input: "(]"
Output: false
Example 4:
Input: "([)]"
Output: false
Example 5:
Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let inValidArr = [')', '}', ']'];
  let map = new Map();
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');
  let arr = [];
  if (s.length % 2 === 1) return false;
  if (inValidArr.includes(s[0])) return false;
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      arr.unshift(map.get(s[i]));
    } else {
      if (s[i] === arr[0]) arr.shift();
    }
  }
  if (arr.length === 0) return true;
  return false;
};

var isValid = function (s) {
  let arr = s.split(''); //"["
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  if (Object.values(map).includes(s[0])) return false;
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(arr[i])) {
      stack.push(map[arr[i]]);
    } else {
      if (arr[i] !== stack.pop()) {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
};

var isValid = function (s) {
  var array = [];
  s = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') array.unshift(')');
    else if (s[i] === '[') array.unshift(']');
    else if (s[i] === '{') array.unshift('}');
    else if (s.length === 0 || array[0] !== s[i]) return false;
    else array.shift();
  }
  return array.length === 0;
};

var isValid = function (s) {
  let arr = s.split(''),
    queue = [];
  if (arr.length % 2 === 1) return false;
  for (let i = 0; i < arr.length; i++) {
    if (queue.length !== 0) {
      if (
        (queue[0] === '(' && arr[i] === ')') ||
        (queue[0] === '[' && arr[i] === ']') ||
        (queue[0] === '{' && arr[i] === '}')
      ) {
        queue.shift();
      }
    }
    if (arr[i] === '(' || arr[i] === '[' || arr[i] === '{') {
      queue.unshift(arr[i]);
    }
  }
  return queue.length === 0;
};

var isValid = function (s) {
  let stack = s.split(''),
    queue = [],
    result = true;
  for (let i = stack.length - 1; i >= 0; i--) {
    if (stack[i] === '(' || stack[i] === '{' || stack[i] === '[') {
      if (queue.length === 0) {
        return false;
      } else if (
        (queue[0] === ')' && stack[i] === '(') ||
        (queue[0] === '}' && stack[i] === '{') ||
        (queue[0] === ']' && stack[i] === '[')
      ) {
        queue.shift();
        stack.splice(i, 1);
      } else {
        return false;
      }
    } else if (stack[i] === ')' || stack[i] === '}' || stack[i] === ']') {
      queue.unshift(stack.pop());
      if (
        (queue[0] === ')' && stack[i - 1] === '(') ||
        (queue[0] === '}' && stack[i - 1] === '{') ||
        (queue[0] === ']' && stack[i - 1] === '[')
      ) {
        queue.shift();
        stack.splice(i - 1, 1);
      }
    }
  }
  if (queue.length !== 0) result = false;
  return result;
};

var isValid = function (s) {
  let inValidArr = [')', '}', ']'];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let arr = [];
  if (s.length % 2 === 1) return false;
  if (inValidArr.includes(s[0])) return false;
  for (let i = 0; i < s.length; i++) {
    if (map.hasOwnProperty(s[i])) {
      arr.unshift(map[s[i]]);
    } else {
      if (s[i] === arr[0]) arr.shift();
    }
  }
  if (arr.length === 0) return true;
  return false;
};
