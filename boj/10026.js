const { array } = require("./fs/multiLine");

const n = +array[0];

const directions = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

function dfs(map, visited, i, j) {
  const stack = [[i, j]];
  visited[i][j] = true;

  while (stack.length > 0) {
    [x, y] = stack.pop();

    for (let i = 0; i < directions.length; i++) {
      const dx = x + directions[i][0];
      const dy = y + directions[i][1];

      if (dx >= n || dx < 0 || dy >= n || dy < 0) {
        continue;
      }

      if (map[x][y] === map[dx][dy] && !visited[dx][dy]) {
        stack.push([dx, dy]);
        visited[dx][dy] = true;
      }
    }
  }
}

function solution() {
  const mapForBlind = Array.from(Array(n), () => Array(n).fill(0));
  const mapforNotBlind = Array.from(Array(n), () => Array(n).fill(0));
  const visitedForBlind = Array.from(Array(n), () => Array(n).fill(false));
  const visitedForNotBlind = Array.from(Array(n), () => Array(n).fill(false));

  let bCount = 0;
  let nbCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      mapForBlind[i][j] = array[i + 1][0][j];
      mapforNotBlind[i][j] = array[i + 1][0][j];
      if (array[i + 1][0][j] === "G") {
        mapForBlind[i][j] = "R";
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visitedForBlind[i][j]) {
        dfs(mapForBlind, visitedForBlind, i, j);
        bCount++;
      }

      if (!visitedForNotBlind[i][j]) {
        dfs(mapforNotBlind, visitedForNotBlind, i, j);
        nbCount++;
      }
    }
  }

  console.log(nbCount, bCount);
}

solution();
