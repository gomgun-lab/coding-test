const input = require("../../fs/input");

const string = input[0];

function solve(string) {
  const alphaCount = new Array(26).fill(0);

  for (const s of string) {
    const index = s.charCodeAt(0) - "a".charCodeAt(0);
    alphaCount[index]++;
  }

  return alphaCount;
}

const result = solve(string);

console.log(result.join(" "));
