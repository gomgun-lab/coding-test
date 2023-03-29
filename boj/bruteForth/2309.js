const input = require("../../fs/input");

const dwarfs = input.map(Number);

const N = 7;

function solve(dwarfs) {
  const results = combinations(dwarfs, N).filter((combination) => {
    const sum = combination.reduce((acc, cur) => acc + cur);
    if (sum === 100) {
      return combination;
    }
  });

  results[0].sort((a, b) => a - b).forEach((v) => console.log(v));
}

function combinations(arr, n) {
  const results = [];

  if (n === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, arr) => {
    const rest = arr.slice(index + 1);
    const result = combinations(rest, n - 1);
    const combine = result.map((v) => [fixed, ...v]);
    results.push(...combine);
  });

  return results;
}

solve(dwarfs);
