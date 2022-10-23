// https://www.acmicpc.net/problem/11660

const { array } = require("../fs/multiLine");

const n = parseInt(array[0][0]);
const m = parseInt(array[0][1]);

const output = [];

const table_a = Array.from(Array(n + 1), () => Array(n + 1).fill(false));
const table_s = Array.from(Array(n + 1), () => Array(n + 1).fill(false));

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    table_a[i][j] = parseInt(array[i][j - 1]);

    table_s[i][j] = table_a[i][j];

    if (table_s[i][j - 1]) {
      table_s[i][j] += table_s[i][j - 1];
    }

    if (table_s[i - 1][j]) {
      table_s[i][j] += table_s[i - 1][j];
    }

    if (table_s[i - 1][j - 1]) {
      table_s[i][j] -= table_s[i - 1][j - 1];
    }
  }
}

// total[x2][y2] = total[x2][y2] - total[x2][y1 - 1] + total[x1 - 1][y2] – [total][x1 - 1][y1 - 1]

for (let i = 0; i < m; i++) {
  const x1 = array[n + i + 1][0];
  const y1 = array[n + i + 1][1];
  const x2 = array[n + i + 1][2];
  const y2 = array[n + i + 1][3];

  output.push(
    table_s[x2][y2] -
      table_s[x2][y1 - 1] -
      table_s[x1 - 1][y2] +
      table_s[x1 - 1][y1 - 1]
  );
}

console.log(output.join("\n"));
