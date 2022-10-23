// https://www.acmicpc.net/problem/1758

const { array } = require("../fs/multiLine");

const n = array[0];
const tips = [];

for (let i = 1; i <= n; i++) {
  tips.push(parseInt(array[i]));
}

tips.sort((a, b) => b - a);

let sum = 0;

for (let i = 1; i <= n; i++) {
  const tip = tips[i - 1] - (i - 1);
  sum += tip > 0 ? tip : 0;
}

console.log(sum);
