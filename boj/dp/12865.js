const { array } = require("../fs/multiLine");

const [n, k] = array[0].map(Number);
const items = array.slice(1).map((item) => item.map(Number));
const dp = Array.from(Array(n + 1), () => Array(k + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= k; j++) {
    const [w, v] = items[i - 1];
    if (j >= w) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
}

console.log(dp[n][k]);
