// https://www.acmicpc.net/problem/19951

const { array } = require("./fs/multiLine");

const n = +array[0][0];
const m = +array[0][1];

const ground = array[1].map((item) => +item);
const prefixSum = Array.from({ length: n }, () => 0);

for (let i = 0; i < m; i++) {
  const start = +array[i + 2][0];
  const end = +array[i + 2][1];
  const order = +array[i + 2][2];

  prefixSum[start - 1] += order;
  if (end === n) continue;
  prefixSum[end] += -order;
}

for (let i = 1; i < n; i++) {
  prefixSum[i] = prefixSum[i - 1] + prefixSum[i];
  ground[i - 1] += prefixSum[i - 1];
}

ground[n - 1] += prefixSum[n - 1];

console.log(ground.join(" "));
