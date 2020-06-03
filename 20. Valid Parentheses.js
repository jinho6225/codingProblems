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
