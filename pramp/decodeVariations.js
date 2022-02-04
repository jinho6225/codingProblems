/*
Decode Variations
A letter can be encoded to a number in the following way:

'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'
A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.

Examples:

input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.
Constraints:

[time limit] 5000ms

[input] string S

1 ≤ S.length ≤ 12
[output] integer
*/

//recursion way
function decodeVariations(S) {
  let count = 0, result = []
  function helper(str = S, len = S.length, arr = []) {
    if (parseInt(str[len-1]) === 0) {
    	count = 0
    	return
    }
    if (len === 0) {
      result.push(arr)
      count++
      return
    }
    
    if (str[str.length - len] <= 2 && str[str.length - (len-1)] <= 6) {      
      helper(str, len-2, arr.concat(str[str.length - len] + str[str.length - (len-1)]))  
    }
    helper(str, len-1, arr.concat(str[str.length - len]))   
  }
  helper()
  console.log(result, 'result')
  return count
}
