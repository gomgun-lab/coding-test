// O(n*n!);
function permutate(arr) {
  const result = [];

  const dfs = (i, arr) => {
    // base condition
    if (i === arr.length) {
      return result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      //swap
      [arr[i], arr[j]] = [arr[j], arr[i]];
      //dfs
      dfs(i + 1, arr);
      //swap -> backtracking
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  dfs(0, arr);
  return result;
}

console.log(permutate(["A", "B", "C"]));

input = ["a", "b", "c"];

// O(n^2*n!);
function permutation(input) {
  const result = [];
  bt([]);
  return result;

  function bt(arr) {
    if (arr.length === input.length) {
      result.push([...arr]);
      return;
    }

    for (char of input) {
      if (arr.includes(char)) {
        continue;
      } else {
        arr.push(char);
        bt(arr);
        arr.pop(char);
      }
    }
  }
}

console.log(permutation(input));
