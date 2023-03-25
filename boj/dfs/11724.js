const input = require("../../fs/input");

const [N, M] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N + 1).fill(false);

function solve(N, M, edges) {
  let components = 0;

  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let i = 1; i < N + 1; i++) {
    if (!visited[i]) {
      dfs(i);
      components++;
    }
  }

  return components;
}

function dfs(node) {
  visited[node] = true;

  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor);
    }
  }
}

console.log(solve(N, M, edges));
