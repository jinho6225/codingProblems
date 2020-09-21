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
    let set = new Set()
    function helper(str) {
      if (str.length === 2) {
        let array = []
        array.push(str)
        array.push(str[1] + str[0])
        set.add([...array])
        return array
      }
      if (str.length > 2) {
        let array = []
        for (let i = 0; i < str.length; i++) {
          let newString = str.substring(0,i) + str.substring(i+1)
          let arr = helper(newString)
          for (let j = 0; j < arr.length; j++) {
            let a = str[i] + arr[j]
            array.push(a)
          }
        }
        let newArr = new Set(array)
        set.add([...newArr])
        return array
      }          
    }
    for (let i = 0; i < tiles.length; i++) {
        set.add(tiles[i])
    }
    helper(tiles)
    return new Set(Array.from(set).flat(Infinity)).size
};



/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let result = new Set()
  for (let i = 0; i < tiles.length; i++) {
      result.add(tiles[i])
  }    
  function helper(tiles) {
      let arr = []
      if (tiles.length === 2) {
          result.add(tiles)
          result.add(tiles[1]+tiles[0])
          arr.push(tiles, tiles[1]+tiles[0])
          return arr
      }
      for (let i = 0; i < tiles.length; i++) {
          let returnArr = helper(tiles.substring(0,i)+tiles.substring(i+1))
          for (let ele of returnArr) {
              result.add(tiles[i]+ele)
              arr.push(tiles[i]+ele)
          }
      }
      return arr    
  }
  helper(tiles)
  return result.size
};
