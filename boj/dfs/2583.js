const input = require("../../fs/input");

const [M, N, K] = input[0].split(" ").map(Number);
const suqrePoints = input
  .slice(1)
  .map((string) => string.split(" ").map(Number));

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const isVisited = (r, c) => visited[r][c];
const isBlock = (r, c) => map[r][c] === 1;
const isOut = (r, c) => r >= M || c >= N || r < 0 || c < 0;

const map = Array.from(Array(M), () => Array(N).fill(0));
const visited = Array.from(Array(M), () => Array(N).fill(false));

function solve(M, N, K, suqrePoints) {
  let count = 0;
  const areaList = [];

  for (let i = 0; i < K; i++) {
    const [startCol, startRow, endCol, endRow] = suqrePoints[i];
    for (let j = startCol; j < endCol; j++) {
      for (let k = startRow; k < endRow; k++) {
        map[k][j] = 1;
      }
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (!isVisited(i, j) && !isBlock(i, j)) {
        areaList.push(dfs(i, j));
        count++;
      }
    }
  }

  console.log(count);
  console.log(areaList.sort((a, b) => a - b).join(" "));
}

function dfs(i, j) {
  const stack = [[i, j]];
  visited[i][j] = true;
  const result = [];
  while (stack.length) {
    const [row, col] = stack.pop();
    result.push([row, col]);
    directions.forEach((direction) => {
      const [r, c] = direction;
      const drow = row + r;
      const dcol = col + c;
      if (isOut(drow, dcol)) return;
      if (!isVisited(drow, dcol) && !isBlock(drow, dcol)) {
        visited[drow][dcol] = true;
        stack.push([drow, dcol]);
      }
    });
  }

  return result.length;
}

solve(M, N, K, suqrePoints);
