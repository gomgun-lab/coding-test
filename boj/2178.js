const { array } = require("./fs/multiLine");

const directions = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

const n = parseInt(array[0][0]);
const m = parseInt(array[0][1]);

const map = [];
const visited = [];

for (let i = 1; i <= n; i++) {
  map[i - 1] = array[i][0].split("").map(Number);
  visited[i - 1] = Array(m).fill(0);
}

const queue = [[0, 0]];
visited[0][0] = 1;

while (queue.length) {
  const [cx, cy] = queue.shift();
  if (!map[cx][cy]) continue;
  map[cx][cy] = 0;

  for (let i = 0; i < directions.length; i++) {
    const dx = cx + directions[i][0];
    const dy = cy + directions[i][1];

    if (dx >= n || dx < 0 || dy >= m || dy < 0) {
      continue;
    }

    if (map[dx][dy]) {
      queue.push([dx, dy]);
      visited[dx][dy] = visited[cx][cy] + 1;
    }
  }
}

console.log(visited[n - 1][m - 1]);

// 시간초과
// const directions = [
//   [1, 0],
//   [-1, 0],
//   [0, -1],
//   [0, 1],
// ];

// const n = parseInt(array[0][0]);
// const m = parseInt(array[0][1]);

// const map = [];
// const visited = [];

// for (let i = 1; i <= n; i++) {
//   map[i - 1] = array[i][0].split("").map(Number);
//   visited[i - 1] = Array(m).fill(false);
// }

// const queue = [[0, 0]];

// while (queue.length) {
//   const [cx, cy] = queue.shift();
//   visited[cx][cy] = true;

//   for (let i = 0; i < directions.length; i++) {
//     const dx = cx + directions[i][0];
//     const dy = cy + directions[i][1];

//     if (dx >= n || dx < 0 || dy >= m || dy < 0) {
//       continue;
//     }

//     if (!visited[dx][dy] && map[dx][dy] !== 0) {
//       queue.push([dx, dy]);
//       map[dx][dy] = map[cx][cy] + 1;
//     }
//   }
// }

// console.log(map[n - 1][m - 1]);
