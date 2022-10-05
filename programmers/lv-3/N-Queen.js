// https://school.programmers.co.kr/learn/courses/30/lessons/12952

function check(table, row) {
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

function search(table, row) {
  const n = table.length;
  let count = 0;

  if (row === n) {
    return 1;
  }

  for (let col = 0; col < n; col++) {
    table[row] = col;
    if (check(table, row)) {
      count += search(table, row + 1);
    }
  }

  return count;
}

function solution(n) {
  return search(
    Array.from({ length: n }, () => 0),
    0
  );
}
