/**
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.
You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
Example
For
a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be
rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
Input/Output

[execution time limit] 4 seconds (js)
[input] array.array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 100,
a[i].length = a.length,
1 ≤ a[i][j] ≤ 104.
[output] array.array.integer
 */

// it is not O(1)
function rotateImage(a) {
    let arr = new Array()
    let i = 0
    while (i < a.length) {
        arr.push(new Array(a[i].length).fill(0))
        i++
    }
    for (let i=0;i<a.length;i++){
        for (let j=0;j<a[i].length;j++){
            arr[j][a.length-i-1] = a[i][j]
        }
    }
    return arr
}

// it is not O(1)
function rotateImage (a) {
	let answer = a.map((row, rowIndex) => {
		let result = a.map(val => {
			return val[rowIndex]
		})
		return result.reverse()
	})
	return answer
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
rotateImage(arr)


//it is O(1) solution


function rotateImage(a) {
  let n = a.length;
  
  for( let row = n - 1; row >= 0; row-- ) {
    for( let col = 0; col < n; col++ ) {
      let item = a[row].shift();
      a[col].push(item);
    }
  }
  return a;
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
rotateImage(arr)