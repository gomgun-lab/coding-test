// https://www.acmicpc.net/problem/9663

const { input } = require("../fs/singleLine");

const n = +input[0];
const table = Array.from({ length: n }, () => 0);

function check(row) {
  for (let i = 0; i < row; i++) {
    if (
      table[i] === table[row] ||
      Math.abs(table[i] - table[row]) === row - i
    ) {
      return false;
    }
  }

  return true;
}

function search(row) {
  let count = 0;

  if (row === n) {
    return 1;
  }

  for (let col = 0; col < n; col++) {
    table[row] = col;
    if (check(row)) {
      count += search(row + 1);
    }
  }

  return count;
}

console.log(search(0));
