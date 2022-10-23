// https://www.acmicpc.net/problem/2468

const { array } = require("../fs/multiLine");

const n = +array[0];
const map = Array.from({ length: n }, () => Array(n));
let maxSafeArea = 0;

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    map[i][j] = +array[i + 1][j];
  }
}

for (let i = 0; i <= 100; i++) {
  const visited = Array.from({ length: n }, () => Array(false));
  const rootsLen = [];

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (map[j][k] > i && !visited[j][k]) {
        const stack = [[j, k]];
        const result = [];

        visited[j][k] = true;

        while (stack.length > 0) {
          const [x, y] = stack.pop();
          result.push([x, y]);

          for (let l = 0; l < directions.length; l++) {
            const dx = x + directions[l][0];
            const dy = y + directions[l][1];
            if (dx >= n || dx < 0 || dy >= n || dy < 0) {
              continue;
            }

            if (map[dx][dy] > i && !visited[dx][dy]) {
              visited[dx][dy] = true;
              stack.push([dx, dy]);
            }
          }
        }

        rootsLen.push(result.length);
      }
    }
  }

  if (maxSafeArea < rootsLen.length) {
    maxSafeArea = rootsLen.length;
  }
}

console.log(maxSafeArea);
