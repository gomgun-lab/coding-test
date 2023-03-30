const input = require("../../fs/input");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function solve(N, S, arr) {
  let count = 0;
  function dfs(n, sum) {
    if (n === N) return;

    sum += arr[n];
    if (sum === S) count++;

    console.log(n, sum);
    dfs(n + 1, sum);
    dfs(n + 1, sum - arr[n]);
  }
  dfs(0, 0);
  console.log(count);
}

solve(N, S, arr);
