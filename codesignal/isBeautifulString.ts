/**

A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.
Given a string, check whether it is beautiful.

Example
For inputString = "bbbaacdafe", the output should be isBeautifulString(inputString) = true.
This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.
For inputString = "aabbb", the output should be isBeautifulString(inputString) = false.
Since there are more bs than as, this string is not beautiful.
For inputString = "bbc", the output should be isBeautifulString(inputString) = false.
Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.

Input/Output
[execution time limit] 4 seconds (py3)
[input] string inputString
A string of lowercase English letters.
Guaranteed constraints:
3 ≤ inputString.length ≤ 50.
[output] boolean
Return true if the string is beautiful, false otherwise.
 */

function isBeautifulString(inputString: string): boolean {

    // const hash: { [key: string]: number } = {};
    // let hashTable: Record<string, number> = {} 
    // const map: Map<number, number> = new Map();

    let alphabetArr: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let map: {[key: string]: number} = {}
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] in map) {
            map[inputString[i]] += 1
        } else {
            map[inputString[i]] = 1
        }
    }
    let arr: string[] = Object.keys(map)
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(alphabetArr[i])) {
            return false
        }
        if (i > 0) {
            if (map[alphabetArr[i]] > map[alphabetArr[i-1]]) {
                return false
            }
        }        
    }
    
    return true
}
