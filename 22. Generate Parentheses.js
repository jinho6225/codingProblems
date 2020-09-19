/*
22. Generate Parentheses
Medium

5902

291

Add to List

Share
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let output = []
    const dfs = (str, open, close) => {
        if (open > close) return
        if (open === 0 && close === 0) {
            output.push(str)
            return
        }
        if (open > 0) {
            dfs(`${str}(`, open-1, close)
        }
        if (close > 0) {
            dfs(`${str})`, open, close-1)
        }
    }
    dfs('', n, n)
    return output
};

