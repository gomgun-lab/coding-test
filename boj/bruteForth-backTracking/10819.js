const { array } = require("../fs/multiLine");

const nums = array[1].map(Number);

function solution(nums) {
  return Math.max(...permutate(nums));
}

function permutate(arr) {
  const result = [];

  const dfs = (i, arr) => {
    if (i === arr.length) {
      // console.log(arr);
      return result.push(calc([...arr]));
    }

    for (let j = i; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      dfs(i + 1, arr);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  dfs(0, arr);

  return result;
}

function calc(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }

  return sum;
}

console.log(solution(nums));
