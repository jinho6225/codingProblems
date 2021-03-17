/**
1041. Robot Bounded In Circle
Medium

907

274

Add to List

Share
On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

"G": go straight 1 unit;
"L": turn 90 degrees to the left;
"R": turn 90 degrees to the right.
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 

Example 1:

Input: instructions = "GGLLGG"
Output: true
Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
Example 2:

Input: instructions = "GG"
Output: false
Explanation: The robot moves north indefinitely.
Example 3:

Input: instructions = "GL"
Output: true
Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
 

Constraints:

1 <= instructions.length <= 100
instructions[i] is 'G', 'L' or, 'R'.
 */


 /**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
	let order = instructions.split('')
        let a = order.slice()
        for (let i = 0; i < 8; i++) {
            order = order.concat(a)
        }
		if (order.includes('G')) {
			if (!order.includes('L') && !order.includes('R')) {
				return false
			} else {
				let i = 0
				let arr = []
				while (i < 4) {
					let result = tracking(order)
					arr = arr.concat(result)
					i++
				}
				if (arr.includes(1)) return false
				return true
			}			
		} else {
			return true
		}
};

function tracking(order) {
	let position = [0, 0]
	let init = [0, 0]
	let direction = 'N'
	let map = new Map()
	for (let i = 0; i < order.length; i++) {
		if (order[i] === 'G') {
			position = calc(position, direction)
			newArr = Array.from(position)
			newArr = JSON.stringify(newArr)
			if (map.has(newArr)) {
				map.set(newArr, map.get(newArr)+1)
			} else {
				map.set(newArr, 1)
			}
		} else {
			if (order[i] === 'L') {
			direction = directWay(direction, order[i])
			} else { //order[i] === 'R'
			direction = directWay(direction, order[i]) 
			}
		}
	}
	return Array.from(map.values())
}	


function directWay(cur, direct) {
    if (cur === 'N') {
        if (direct === 'L') {
            return 'W'
        } else {
            return 'E'
        }
    } else if (cur === 'W') {
        if (direct === 'L') {
            return 'S'
        } else {
            return 'N'
        }
    } else if (cur === 'E') {
        if (direct === 'L') {
            return 'N'
        } else {
            return 'S'
        }
    } else if (cur === 'S') {
        if (direct === 'L') {
            return 'E'
        } else {
            return 'W'
        }
    }
}

function calc(init, direction) {
    if (direction === 'N') {
        init[1] = init[1] + 1
    } else if (direction === 'W') {
        init[0] = init[0] - 1
    } else if (direction === 'E') {
        init[0] = init[0] + 1
    } else if (direction === 'S') {
        init[1] = init[1] - 1
    }
    return init
}


/*
"GRGLGRG"
"GG"
"GGLLGG"
"GL"
"GLGLGGLGL"
*/