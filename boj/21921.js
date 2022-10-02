const { array } = require("./fs/multiLine");

const n = array[0][0];
const x = array[0][1];
const guests = array[1].map((item) => +item);

let sum = 0;
let maxSum = 0;
let count = 0;

for (let i = 0; i < x; i++) {
  sum += guests[i];
}

maxSum = sum;
count++;

for (let i = x - 1; i < n; i++) {
  sum = sum - guests[i - x + 1] + guests[i + 1];
  if (sum === maxSum) {
    count++;
  }

  if (sum > maxSum) {
    count = 1;
    maxSum = sum;
  }
}

if (maxSum === 0) {
  console.log("SAD");
  process.exit();
}

console.log(maxSum);
console.log(count);
