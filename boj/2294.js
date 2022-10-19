const { array } = require("./fs/multiLine");

const [n, k] = array[0].map((item) => +item);
const coins = array.slice(1).map((item) => +item);
const dp = Array(k + 1).fill(10001);
dp[0] = 0;

for (const coin of coins) {
  for (let i = coin; i < k + 1; i++) {
    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  }
}

console.log(dp[k] !== 10001 ? dp[k] : -1);
