const { input } = require("./fs/singleLine");

let a = parseInt(input[0]);
const b = parseInt(input[1]);

let count = 0;
const results = [];

(function dfs(start, count) {
  if (start === b) {
    results.push(count);
  }

  if (start > b) {
    return;
  }

  dfs(start * 2, count + 1);
  dfs(parseInt(start + "1"), count + 1);
})(a, count);

if (results[0] + 1) {
  console.log(results[0] + 1);
} else {
  console.log(-1);
}
