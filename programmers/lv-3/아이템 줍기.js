// https://school.programmers.co.kr/learn/courses/30/lessons/87694?language=javascript

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;

  const map = Array.from(Array(103), () => Array(103).fill(false));
  const visited = Array.from(Array(103), () => Array(103).fill(false));
  const range = Array.from(Array(103), () => Array(103).fill(0));

  for (let i = 0; i < rectangle.length; i++) {
    for (let x = rectangle[i][0] * 2; x <= rectangle[i][2] * 2; x++) {
      for (let y = rectangle[i][1] * 2; y <= rectangle[i][3] * 2; y++) {
        map[y][x] = true;
      }
    }
  }

  for (let i = 0; i < rectangle.length; i++) {
    for (let x = rectangle[i][0] * 2 + 1; x < rectangle[i][2] * 2; x++) {
      for (let y = rectangle[i][1] * 2 + 1; y < rectangle[i][3] * 2; y++) {
        map[y][x] = false;
      }
    }
  }

  answer = bfs(
    map,
    visited,
    range,
    characterX * 2,
    characterY * 2,
    itemX * 2,
    itemY * 2
  );

  return answer;
}

function bfs(map, visited, range, cX, cY, iX, iY) {
  const result = [];
  const stack = [[cY, cX]];
  let curPosition; // [y, x]
  visited[cY][cX] = true;
  while (stack.length > 0) {
    curPosition = stack.shift();
    result.push(curPosition);
    if (curPosition[1] === iX && curPosition[0] === iY) break;
    for (let i = 0; i < directions.length; i++) {
      // 2,2 => 100, 100
      const dy = curPosition[0] + directions[i][0];
      const dx = curPosition[1] + directions[i][1];
      // if (dx > 101 || dx < 2 || dy > 101 || dy < 2) continue;
      if (map[dy][dx] === true && !visited[dy][dx]) {
        visited[dy][dx] = true;
        range[dy][dx] = range[curPosition[0]][curPosition[1]] + 1;
        stack.push([dy, dx]);
      }
    }
  }

  return range[iY][iX] / 2;
}
