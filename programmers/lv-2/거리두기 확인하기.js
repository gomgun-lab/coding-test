const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(places) {
  var answer = [];

  answer = places.map((place) => {
    for (let row = 0; row < place.length; row++) {
      for (let col = 0; col < place[row].length; col++) {
        if (place[row][col] === "P") {
          if (bfs(row, col, place) === false) return 0;
        }
      }
    }
    return 1;
  });

  return answer;
}

const isValidPos = (x, y, n) => 0 <= x && x < n && 0 <= y && y < n;
const calcLen = (row, col, curRow, curCol) =>
  Math.abs(row - curRow) + Math.abs(col - curCol);

// input : p's location, output : boolean
function bfs(row, col, place) {
  const queue = [[row, col]];
  const visited = Array.from(Array(5), (_) => new Array(5).fill(false));
  visited[row][col] = true;
  while (queue.length > 0) {
    const [curRow, curCol] = queue.shift();
    if (calcLen(row, col, curRow, curCol) > 2) break;
    if (place[curRow][curCol] === "P" && !visited[curRow][curCol]) return false;
    visited[curRow][curCol] = true;
    for (let i = 0; i < directions.length; i++) {
      const dy = curRow + directions[i][0];
      const dx = curCol + directions[i][1];
      if (!isValidPos(dy, dx, 5)) continue;
      if (place[dy][dx] === "X") continue;
      if (!visited[dy][dx]) {
        queue.push([dy, dx]);
      }
    }
  }

  return true;
}
