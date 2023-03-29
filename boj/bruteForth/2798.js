const { array } = require("../fs/multiLine");

[n, m] = array[0].map((v) => +v);
list = array[1].map((v) => +v);
const cards = 3;

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

const maxNum = Math.max(
  ...combinations(list, cards)
    .map((arr) => arr.reduce((acc, cur) => acc + cur, 0))
    .filter((item) => item <= m)
);

console.log(maxNum);
