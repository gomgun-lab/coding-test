// https://www.acmicpc.net/problem/1987

const { array } = require("../fs/multiLine");

const [n, m] = array[0].map(Number);
const directions = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0],
];

const map = array.slice(1).map((arr) => arr[0].split(""));
const visited = new Set(map[0][0]);
let count = 1;

function dfs(x, y) {
  for (let i = 0; i < directions.length; i++) {
    const dx = x + directions[i][0];
    const dy = y + directions[i][1];

    if (dx >= n || dx < 0 || dy >= m || dy < 0) {
      continue;
    }

    if (!visited.has(map[dx][dy])) {
      visited.add(map[dx][dy]);
      count = Math.max(count, visited.size);
      dfs(dx, dy);
      visited.delete(map[dx][dy]);
    }
  }
}

dfs(0, 0);
console.log(count);
