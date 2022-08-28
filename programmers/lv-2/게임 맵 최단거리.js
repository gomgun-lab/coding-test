// https://school.programmers.co.kr/learn/courses/30/lessons/1844

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

// bfs 로 현재까지의 길 거리 표시 (이전 칸 거리 + 1)

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const queue = [[0, 0]];
  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  const range = Array.from(Array(n), () => new Array(m).fill(0));

  visited[0][0] = true;

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    if (row === n - 1 && col === m - 1) return range[row][col] + 1;
    for (let i = 0; i < directions.length; i++) {
      const dy = row + directions[i][0];
      const dx = col + directions[i][1];
      if (dy >= n || dy < 0 || dx >= m || dx < 0) continue;
      if (maps[dy][dx] === 1 && !visited[dy][dx]) {
        queue.push([dy, dx]);
        visited[dy][dx] = true;
        range[dy][dx] += range[row][col] + 1;
      }
    }
  }

  return -1;
}
