// https://www.acmicpc.net/problem/3190

const { array } = require("./fs/multiLine");

const n = +array[0];
const k = +array[1];
const l = +array[2 + k];

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function calcDirection(leftOrRight, curDirection) {
  if (leftOrRight === "L") {
    curDirection = (curDirection - 1 + directions.length) % directions.length;
  }
  if (leftOrRight === "D") {
    curDirection = (curDirection + 1) % directions.length;
  }
  return curDirection;
}

function bfs(map, directionList) {
  let curDirection = 0;
  let count = 0;

  const snake = [[0, 0]];
  const queue = [[0, 0]];

  while (queue.length > 0) {
    [x, y] = queue.shift();

    const dx = x + directions[curDirection][0];
    const dy = y + directions[curDirection][1];

    if (dx >= n || dx < 0 || dy >= n || dy < 0 || map[dx][dy] === "B") {
      return count;
    }

    if (map[dx][dy] !== "A") {
      [x, y] = snake.shift();
      map[x][y] = "0";
    }

    map[dx][dy] = "B";
    snake.push([dx, dy]);
    queue.push([dx, dy]);

    count++;

    if (directionList.get(count)) {
      curDirection = calcDirection(directionList.get(count), curDirection);
    }
  }
}

function solution() {
  const map = Array.from(Array(n), () => Array(n).fill("0"));
  const directionList = new Map();
  map[0][0] = "B";

  for (let i = 2; i < 2 + k; i++) {
    [x, y] = array[i];
    map[+x - 1][+y - 1] = "A";
  }

  for (let i = 3 + k; i < 3 + k + l; i++) {
    directionList.set(+array[i][0], array[i][1]);
  }

  console.log(bfs(map, directionList) + 1);
}

solution();
