// https://www.acmicpc.net/problem/2217

const { array } = require("../fs/multiLine");

const n = array[0];
const lopeList = [];

for (let i = 1; i <= n; i++) {
  lopeList.push(parseInt(array[i]));
}

let maxWeight = 0;
let curWeights = 50000;

lopeList.sort((a, b) => b - a);

for (let i = 0; i < n; i++) {
  if (curWeights > lopeList[i]) {
    curWeights = lopeList[i];
  }
  maxWeight = Math.max(curWeights * (i + 1), maxWeight);
}

console.log(maxWeight);
