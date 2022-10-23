const { array: input } = require("./fs/multiLine");

const n = input[0][0];
const m = input[0][1];
const i = input[0][2];

const graph = Array.from(Array(parseInt(n) + 1), () => []);

for (let j = 1; j <= m; j++) {
  graph[+input[j][0]].push(+input[j][1]);
  graph[+input[j][1]].push(+input[j][0]);
}

// for (let j = 1; j <= n; j++) {
//   graph[j].sort();
// }

function depthFirstRecursive(graph, startNode) {
  const result = [];
  const visited = {};
  const queue = [];
  let curNode;

  queue.push(startNode);
  visited[startNode] = true;

  console.log("dfs");

  while (queue.length > 0) {
    curNode = queue.pop();
    result.push(curNode);
    graph[curNode].sort((a, b) => b - a);
    console.log(graph[curNode]);
    graph[curNode].forEach((neighborNode) => {
      if (!visited[neighborNode]) {
        queue.push(neighborNode);
        visited[neighborNode] = true;
      }
    });
  }

  return result;
}

function breadthFirst(graph, startNode) {
  const visited = {};
  const result = [];
  const queue = [];
  let curNode;

  queue.push(startNode);
  visited[startNode] = true;

  console.log("dfs");

  while (queue.length > 0) {
    curNode = queue.shift();
    result.push(curNode);
    graph[curNode].sort((a, b) => a - b);
    console.log(graph[curNode]);
    graph[curNode].forEach((neighborNode) => {
      if (!visited[neighborNode]) {
        queue.push(neighborNode);
        visited[neighborNode] = true;
      }
    });
  }

  return result;
}

console.log(graph);

const dfs_result = depthFirstRecursive(graph, +i);

console.log(...dfs_result);

const bfs_result = breadthFirst(graph, +i);

console.log(...bfs_result);
