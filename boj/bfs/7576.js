const input = require("../../fs/input");

const [M, N] = input[0].split(" ").map(Number);

const map = input.slice(1).map((row) => row.split(" ").map(Number));
const visited = Array.from(Array(N), () => Array(M).fill(false));

const isEmpty = (row, col) => map[row][col] === -1;
const isRipe = (row, col) => map[row][col] === 1;
const isOut = (row, col) => row >= N || row < 0 || col >= M || col < 0;
const isVisited = (row, col) => visited[row][col] === true;

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solve(M, N) {
  let day = 0;
  const queue = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (isRipe(i, j)) {
        queue.push([i, j]);
        visited[i][j] = true;
      }
    }
  }

  let prevIdx = 0;
  while (true) {
    const curIdx = queue.length;
    let change = false;
    for (let i = prevIdx; i < curIdx; i++) {
      const [row, col] = queue[i];
      directions.forEach((direction) => {
        const dRow = direction[0] + row;
        const dCol = direction[1] + col;

        if (isOut(dRow, dCol)) return;
        if (
          !isVisited(dRow, dCol) &&
          !isEmpty(dRow, dCol) &&
          !isRipe(dRow, dCol)
        ) {
          queue.push([dRow, dCol]);
          visited[dRow][dCol] = true;
          map[dRow][dCol] = 1;
          change = true;
        }
      });
    }
    if (!change) break;
    day++;
    prevIdx = curIdx;
  }

  for (let i = 0; i < N; i++) {
    if (map[i].includes(0)) {
      return -1;
    }
  }

  return day;
}

console.log(solve(M, N));
