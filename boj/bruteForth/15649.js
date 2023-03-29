const input = require("../../fs/input");

const [N, M] = input[0].split(" ").map(Number);

function dfs(arr, n, m) {
  if (arr.length === m) {
    console.log(arr.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      arr.push(i);
      dfs(arr, n, m);
      arr.pop();
    }
  }
}

function solve(N, M) {
  dfs([], N, M);
}

solve(N, M);
