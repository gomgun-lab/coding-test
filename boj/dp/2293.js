// https://www.acmicpc.net/problem/2293

const { array } = require("../fs/multiLine");

const [n, k] = array[0].map(Number);
const dp = Array(k + 1).fill(0);
const coins = [];

for (let i = 0; i < n; i++) {
  coins.push(+array[i + 1]);
}

dp[0] = 1;

for (let i = 1; i <= n; i++) {
  for (let j = coins[i - 1]; j <= k; j++) {
    dp[j] = dp[j] + dp[j - coins[i - 1]];
  }
}

console.log(dp[10]);
