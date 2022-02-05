/*
Shortest Word Edit Path
Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.

If the task is impossible, return -1.

Examples:

source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.
source = "no", target = "go"
words = ["to"]

output: -1
Constraints:

[time limit] 5000ms
[input] string source
1 ≤ source.length ≤ 20
[input] string target
1 ≤ target.length ≤ 20
[input] array.string words
1 ≤ words.length ≤ 20
[output] array.integer
*/
function shortestWordEditPath(source, target, words) {
	/**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/

	// your code goes here
  let seen = new Set([source])
  let queue = [[source, 0]]
  while (queue.length) {
    let [cur, count] = queue.shift()
    if (cur === target) return count
    for (let i = 0; i < words.length; i++) {
      if (compareWord(cur, words[i]) && !seen.has(words[i])) {
        queue.push([words[i], count+1])
        seen.add(words[i])
      }
    }
  }
  return -1
}

function compareWord(str1, str2) {
  if (str1.length !== str2.length) return false
  let count = 0
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      if (count === 1) return false
      count++
    }    
  }
  return true
}
