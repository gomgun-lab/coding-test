const { input } = require("../fs/singleLine");

const depth = +input;
const dp = Array(depth + 1).fill(0);
dp[1] = 1;

for (let i = 2; i <= depth; i++) {
  dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
}

console.log(String(dp[depth]));
