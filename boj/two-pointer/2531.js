const { captureRejectionSymbol } = require("events");
const input = require("../../fs/input");

const [n, d, k, c] = input[0].split(" ").map(Number);
const sushis = input.slice(1).map(Number);

let maxCount = 0;
let count = 0;

const seq = sushis.slice(0, k).reduce((acc, v) => {
  if (acc[v]) {
    acc[v]++;
  } else {
    acc[v] = 1;
    count++;
    maxCount++;
  }
  return acc;
}, {});

let i = 0;
let j = k - 1;

while (i < n) {
  if (seq[sushis[i]] === 1) {
    count--;
  }
  seq[sushis[i]]--;

  i++;
  j++;

  if (j === n) {
    j = 0;
  }

  if (seq[sushis[j]]) {
    seq[sushis[j]]++;
  } else {
    seq[sushis[j]] = 1;
    count++;
  }

  maxCount = Math.max(maxCount, count + !seq[c]);
}

console.log(maxCount);
