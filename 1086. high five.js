/**
Given a list of scores of different students, 
return the average score of each student's top five scores in the order of each student's id.

Each entry items[i] has items[i][0] the student's id, 
and items[i][1] the student's score.  The average score is calculated using integer division.

Input: [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
Output: [[1,87],[2,88]]
Explanation: 
The average of the student with id = 1 is 87.
The average of the student with id = 2 is 88.6. But with integer division their average converts to 88.
 */

function avgStudentWithId(arr) {
  let map = {};
  arr.forEach((studentInfo, idx) => {
    if (studentInfo[0] in map) {
      map[studentInfo[0]].push(studentInfo[1]);
    } else {
      map[studentInfo[0]] = [];
      map[studentInfo[0]].push(studentInfo[1]);
    }
  });
  let result = [];
  for (let key in map) {
    result.push([key, avg(map[key])]);
  }
  return result;
}

function avg(arr) {
  arr.sort((a, b) => b - a);
  let total = 0;
  let len = arr.length >= 5 ? 5 : arr.length;
  for (let i = 0; i < len; i++) {
    total += arr[i];
  }
  return Math.floor(total / len);
}

const exp = [
  [1, 91],
  [1, 92],
  [2, 93],
  [2, 97],
  [1, 60],
  [2, 77],
  [1, 65],
  [1, 87],
  [1, 100],
  [2, 100],
  [2, 76],
];
console.log(avgStudentWithId(exp));
