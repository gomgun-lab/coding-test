const input = require("../../fs/input");

const [A, P] = input[0].split(" ").map(Number);

function nextNumber(num, p) {
  return num
    .toString()
    .split("")
    .map((digit) => Math.pow(parseInt(digit), p))
    .reduce((sum, val) => sum + val);
}

function solve(a, p) {
  const seq = [];
  let current = a;

  while (!seq.includes(current)) {
    seq.push(current);
    current = nextNumber(current, p);
  }

  return seq.indexOf(current);
}

console.log(solve(A, P));
