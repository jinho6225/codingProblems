/*
36. Valid Sudoku
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
A partially filled sudoku which is valid.
The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:
Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:
Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  function checkCondition(arr, object) {
    for (let j = 0; j < arr.length; j++) {
      if (!object[arr[j]]) {
        object[arr[j]] = 1;
      } else {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < 9; i++) {
    let row = [],
      obj = {};
    for (let k = 0; k < 9; k++) {
      if (board[i][k] !== '.') {
        row.push(board[i][k]);
      }
    }
    if (!checkCondition(row, obj)) return false;
  }

  for (let i = 0; i < 9; i++) {
    let col = [],
      obj = {};
    for (let k = 0; k < 9; k++) {
      if (board[k][i] !== '.') {
        col.push(board[k][i]);
      }
    }
    if (!checkCondition(col, obj)) return false;
  }
  let map = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        map[String(i + 1) + String(j + 1)] = false;
      } else {
        map[String(i + 1) + String(j + 1)] = board[i][j];
      }
    }
  }

  function checkBox(num, map) {
    let box = [],
      obj = {};
    if (map[num]) box.push(map[num]);
    if (map[num + 1]) box.push(map[num + 1]);
    if (map[num + 2]) box.push(map[num + 2]);
    if (map[num + 10]) box.push(map[num + 10]);
    if (map[num + 11]) box.push(map[num + 11]);
    if (map[num + 12]) box.push(map[num + 12]);
    if (map[num + 20]) box.push(map[num + 20]);
    if (map[num + 21]) box.push(map[num + 21]);
    if (map[num + 22]) box.push(map[num + 22]);
    if (!checkCondition(box, obj)) return false;
    return true;
  }

  if (!checkBox(11, map)) return false;
  if (!checkBox(14, map)) return false;
  if (!checkBox(17, map)) return false;
  if (!checkBox(41, map)) return false;
  if (!checkBox(44, map)) return false;
  if (!checkBox(47, map)) return false;
  if (!checkBox(71, map)) return false;
  if (!checkBox(74, map)) return false;
  if (!checkBox(77, map)) return false;
  return true;
};

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = [],
      obj = {};
    for (let k = 0; k < 9; k++) {
      if (board[i][k] !== '.') {
        row.push(board[i][k]);
      }
    }
    for (let j = 0; j < row.length; j++) {
      if (!obj[row[j]]) {
        obj[row[j]] = 1;
      } else {
        return false;
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    let col = [],
      obj = {};
    for (let k = 0; k < 9; k++) {
      if (board[k][i] !== '.') {
        col.push(board[k][i]);
      }
    }
    for (let j = 0; j < col.length; j++) {
      if (!obj[col[j]]) {
        obj[col[j]] = 1;
      } else {
        return false;
      }
    }
  }
  let map = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        map[String(i + 1) + String(j + 1)] = false;
      } else {
        map[String(i + 1) + String(j + 1)] = board[i][j];
      }
    }
  }

  function checkBox(num, map) {
    let box = [],
      obj = {};
    if (map[num]) box.push(map[num]);
    if (map[num + 1]) box.push(map[num + 1]);
    if (map[num + 2]) box.push(map[num + 2]);
    if (map[num + 10]) box.push(map[num + 10]);
    if (map[num + 11]) box.push(map[num + 11]);
    if (map[num + 12]) box.push(map[num + 12]);
    if (map[num + 20]) box.push(map[num + 20]);
    if (map[num + 21]) box.push(map[num + 21]);
    if (map[num + 22]) box.push(map[num + 22]);
    for (let i = 0; i < box.length; i++) {
      if (!obj[box[i]]) {
        obj[box[i]] = 1;
      } else {
        return false;
      }
    }
    return true;
  }
  if (!checkBox(11, map)) return false;
  if (!checkBox(14, map)) return false;
  if (!checkBox(17, map)) return false;
  if (!checkBox(41, map)) return false;
  if (!checkBox(44, map)) return false;
  if (!checkBox(47, map)) return false;
  if (!checkBox(71, map)) return false;
  if (!checkBox(74, map)) return false;
  if (!checkBox(77, map)) return false;
  return true;
};

var isValidSudoku = function (board) {
  let map = {};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let index = i.toString() + j.toString();
      if (index[0] === i.toString()) {
        if (!map['x' + i]) {
          map['x' + i] = [];
          if (board[i][j] !== '.') {
            if (!map['x' + i].includes(board[i][j])) {
              map['x' + i].push(board[i][j]);
            } else {
              return false;
            }
          }
        } else {
          if (board[i][j] !== '.') {
            if (!map['x' + i].includes(board[i][j])) {
              map['x' + i].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      }
      if (index[1] === j.toString()) {
        if (!map['y' + j]) {
          map['y' + j] = [];
          if (board[i][j] !== '.') {
            if (!map['y' + j].includes(board[i][j])) {
              map['y' + j].push(board[i][j]);
            } else {
              return false;
            }
          }
        } else {
          if (board[i][j] !== '.') {
            if (!map['y' + j].includes(board[i][j])) {
              map['y' + j].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      }

      if (i < 3 && j < 3) {
        if (board[i][j] !== '.') {
          if (!map[33]) {
            map[33] = [];
            if (!map[33].includes(board[i][j])) {
              map[33].push(board[i][j]);
            } else {
              return false;
            }
          } else {
            if (!map[33].includes(board[i][j])) {
              map[33].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      } else if (i < 3 && j >= 3 && j < 6) {
        if (board[i][j] !== '.') {
          if (!map[36]) {
            map[36] = [];
            if (!map[36].includes(board[i][j])) {
              map[36].push(board[i][j]);
            } else {
              return false;
            }
          } else {
            if (!map[36].includes(board[i][j])) {
              map[36].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      } else if (i < 3 && j >= 6 && j < 9) {
        if (board[i][j] !== '.') {
          if (!map[39]) {
            map[39] = [];
            if (!map[39].includes(board[i][j])) {
              map[39].push(board[i][j]);
            } else {
              return false;
            }
          } else {
            if (!map[39].includes(board[i][j])) {
              map[39].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      }

      if (3 <= i && i < 6 && j < 3) {
        if (board[i][j] !== '.') {
          if (!map[63]) {
            map[63] = [];
            if (!map[63].includes(board[i][j])) {
              map[63].push(board[i][j]);
            } else {
              return false;
            }
          } else {
            if (!map[63].includes(board[i][j])) {
              map[63].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      } else if (3 <= i && i < 6 && j >= 3 && j < 6) {
        if (board[i][j] !== '.') {
          if (!map[66]) {
            map[66] = [];
            if (!map[66].includes(board[i][j])) {
              map[66].push(board[i][j]);
            } else {
              return false;
            }
          } else {
            if (!map[66].includes(board[i][j])) {
              map[66].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      } else if (3 <= i && i < 6 && j >= 6 && j < 9) {
        if (board[i][j] !== '.') {
          if (!map[69]) {
            map[69] = [];
            if (!map[69].includes(board[i][j])) {
              map[69].push(board[i][j]);
            } else {
              return false;
            }
          } else {
            if (!map[69].includes(board[i][j])) {
              map[69].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      }

      if (6 <= i && i < 9 && j < 3) {
        if (board[i][j] !== '.') {
          if (!map[93]) {
            map[93] = [];
            if (!map[93].includes(board[i][j])) {
              map[93].push(board[i][j]);
            } else {
              return false;
            }
          } else {
            if (!map[93].includes(board[i][j])) {
              map[93].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      } else if (6 <= i && i < 9 && j >= 3 && j < 6) {
        if (board[i][j] !== '.') {
          if (!map[96]) {
            map[96] = [];
            if (!map[96].includes(board[i][j])) {
              map[96].push(board[i][j]);
            } else {
              return false;
            }
          } else {
            if (!map[96].includes(board[i][j])) {
              map[96].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      } else if (6 <= i && i < 9 && j >= 6 && j < 9) {
        if (board[i][j] !== '.') {
          if (!map[99]) {
            map[99] = [];
            if (!map[99].includes(board[i][j])) {
              map[99].push(board[i][j]);
            } else {
              return false;
            }
          } else {
            if (!map[99].includes(board[i][j])) {
              map[99].push(board[i][j]);
            } else {
              return false;
            }
          }
        }
      }
    }
  }

  return true;
};
