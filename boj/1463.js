// https://www.acmicpc.net/problem/1463

const { input } = require("./fs/singleLine");

const x = +input[0];

const table = Array(x + 1).fill(-1);

table[1] = 0;
table[2] = 1;
table[3] = 1;

for (let i = 4; i <= x; i++) {
  table[i] = table[i - 1] + 1;

  if (i % 3 === 0) {
    table[i] = Math.min(table[i], table[i / 3] + 1);
  }

  if (i % 2 === 0) {
    table[i] = Math.min(table[i], table[i / 2] + 1);
  }
}

console.log(table[x]);
