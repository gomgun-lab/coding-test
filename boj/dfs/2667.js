// https://www.acmicpc.net/problem/2667

const { array } = require("../fs/multiLine");

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const n = parseInt(array[0]);

const map = Array.from(Array(n), () => Array(n).fill(0));
const visited = Array.from(Array(n), () => Array(n).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    map[i][j] = parseInt(array[i + 1][0][j]);
  }
}

let totalCount = 0;
const countsList = [];

// bfs
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j] || map[i][j] === 0) {
      continue;
    }

    totalCount += 1;

    const result = [[i, j]];
    const queue = [[i, j]];
    visited[i][j] = true;

    while (queue.length > 0) {
      [curX, curY] = queue.shift();

      for (let i = 0; i < directions.length; i++) {
        const dx = directions[i][0] + curX;
        const dy = directions[i][1] + curY;

        if (dx >= n || dx < 0 || dy >= n || dy < 0) {
          continue;
        }

        if (visited[dx][dy] || map[dx][dy] === 0) {
          continue;
        }

        visited[dx][dy] = true;
        queue.push([dx, dy]);
        result.push([dx, dy]);
      }
    }

    countsList.push(result);
  }
}

console.log(totalCount);
countsList
  .map((count) => count.length)
  .sort((a, b) => a - b)
  .forEach((item) => console.log(item));
