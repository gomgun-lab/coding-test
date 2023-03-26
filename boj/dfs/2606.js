const input = require("../../fs/input");

const N = +input[0];
const V = +input[1];
const edges = input.slice(2).map((line) => line.split(" ").map(Number));

const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N + 1).fill(false);

function solve() {
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  return dfs(1);
}

function dfs(node) {
  const result = [];
  const stack = [node];
  visited[node] = true;

  while (stack.length) {
    const node = stack.pop();
    result.push(node);

    for (neighbor of graph[node]) {
      if (!visited[neighbor]) {
        stack.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }

  return result.length - 1;
}

console.log(solve());
