// https://www.acmicpc.net/problem/11659

const { array } = require("./fs/multiLine");

const n = array[0][0];
const m = array[0][1];

const output = [];

const a = array[1].map((value) => +value);
const s = Array.from({ length: n }, () => 0);

for (let i = 1; i <= n; i++) {
  s[i] = s[i - 1] + a[i - 1];
}

for (let k = 0; k < m; k++) {
  const i = array[k + 2][0];
  const j = array[k + 2][1];
  output.push(s[j] - s[i - 1]);
}

console.log(output.join("\n"));
