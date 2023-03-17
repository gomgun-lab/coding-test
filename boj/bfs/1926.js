const input = require("../../fs/input");

const [n, m] = input[0].split(" ").map((x) => +x);
const map = input.slice(1, input.length).map((n) => n.split(" "));
const visited = Array.from(Array(n), () => Array(m).fill(false));

const DIRECTIONS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const isSpace = (row, col) => map[row][col] === "0";
const isVisited = (row, col) => visited[row][col] === true;
const isOut = (row, col) => row < 0 || col < 0 || row >= n || col >= m;

let count = 0;
let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!isSpace(i, j) && !isVisited(i, j)) {
      result = Math.max(result, bfs(i, j).length);
      count++;
    }
  }
}

function bfs(row, col) {
  const queue = [[row, col]];
  visited[row][col] = true;
  const result = [];

  while (queue.length) {
    const [row, col] = queue.shift();
    result.push([row, col]);
    DIRECTIONS.forEach((direction) => {
      const drow = row + direction[0];
      const dcol = col + direction[1];

      if (isOut(drow, dcol)) return;
      if (isSpace(drow, dcol)) return;
      if (isVisited(drow, dcol)) return;

      visited[drow][dcol] = true;
      queue.push([drow, dcol]);
    });
  }

  return result;
}

console.log(count);
console.log(result);
