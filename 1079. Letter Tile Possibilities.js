/*
1079. Letter Tile Possibilities
Medium

You have n  tiles, where each tile has one letter tiles[i] printed on it.
Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.
 
Example 1:
Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:
Input: tiles = "AAABBC"
Output: 188
Example 3:
Input: tiles = "V"
Output: 1
*/

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let answer = new Set()
    function helper(str) {
        if (str.length === 2) {
            let arr = []
            arr.push(str)
            arr.push(str[1]+str[0])
            answer.add(arr)
            return arr
        }
        if (str.length > 2) {
            let arr = []
            for (let i = 0; i < str.length; i++) {
                let string = str.substring(0,i) + str.substring(i+1)
                let mySet = helper(string)
                for (let j = 0; j < mySet.length; j++) {
                    arr.push(str[i] + mySet[j])
                }
            }
            answer.add(arr)
            return arr
        }
    }
    helper(tiles)
    for (let i = 0; i < tiles.length; i++) {
        answer.add(tiles[i])
    }
    let result = []
    answer.forEach(el => result.push(...el))
    let set = new Set(result)
    return set.size  
};

/*
  ''
A A B
AA  AB   BA
AAB ABA BAA 
*/