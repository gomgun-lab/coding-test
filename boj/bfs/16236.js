// https://www.acmicpc.net/problem/16236

const { array } = require("../fs/multiLine");

const n = +array[0];
const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution() {
  const map = Array.from(Array(n), () => Array(n).fill(0));
  let curShackSize = 2;
  let start = [-1, -1];
  let count = 0;
  let time = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map[i][j] = +array[i + 1][j];
      if (map[i][j] === 9) {
        start = [i, j];
      }
    }
  }

  while (true) {
    const obj = calc(map, start, curShackSize, count);
    if (obj.length === 0) {
      console.log(time);
      return;
    }
    time += obj.length;
    start = obj.next;
    curShackSize = obj.curShackSize;
    count = obj.count;
  }
}

function calc(map, start, curShackSize, count) {
  const visited = Array.from(Array(n), () => Array(n).fill(false));
  let queue = [start];
  [x, y] = start;
  visited[x][y] = true;
  map[x][y] = 0;

  for (let i = 1; i < n * n; i++) {
    const nextQueue = [];
    const eatableQueue = [];
    while (queue.length > 0) {
      [x, y] = queue.shift();
      for (let j = 0; j < directions.length; j++) {
        const dx = x + directions[j][0];
        const dy = y + directions[j][1];
        if (dx >= n || dx < 0 || dy >= n || dy < 0) {
          continue;
        }

        if (!visited[dx][dy] && map[dx][dy] <= curShackSize) {
          nextQueue.push([dx, dy]);
          visited[dx][dy] = true;
          if (map[dx][dy] < curShackSize && map[dx][dy] !== 0) {
            eatableQueue.push([dx, dy]);
          }
        }
      }
    }

    if (eatableQueue.length > 0) {
      const copyEatableQueue = sort(eatableQueue);
      [x, y] = copyEatableQueue.pop();
      map[x][y] = 9;
      count++;
      if (count === curShackSize) {
        count = 0;
        curShackSize++;
      }
      return { next: [x, y], length: i, count, curShackSize };
    }

    if (nextQueue.length === 0) {
      return { length: 0 };
    }

    queue = [...nextQueue];
  }
}

function sort(array) {
  return array.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0];
    }
    return b[1] - a[1];
  });
}

solution();
