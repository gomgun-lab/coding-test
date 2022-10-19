const { array } = require("./fs/multiLine");

const n = +array[0][0];
const h = +array[0][1];
const up = Array(h + 1).fill(0);
const bottom = Array(h + 1).fill(0);

for (let i = 0; i < n; i++) {
  const height = +array[i + 1];
  if (i % 2 === 0) {
    bottom[height] += 1;
  } else {
    up[height] += 1;
  }
}

for (let i = h - 1; i > 0; i--) {
  up[i] += up[i + 1];
  bottom[i] += bottom[i + 1];
}

let min = 600000;
let count = 1;

for (let i = 1; i < h + 1; i++) {
  const sum = bottom[h - i + 1] + up[i];
  if (sum < min) {
    min = sum;
    count = 1;
  } else if (sum === min) {
    count++;
  }
}

console.log(min, count);
