# depth First recursive pseudocode

- The function should accept a starting node
- Create a List to store the end result, to be returned at the very end
- Create an object to store visited vertices (boolean)
- Create a helper function which accepts a vertex
  - The helper function should return early if the vertex is empty
  - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
  - Loop over all of the values in the adjacencyList for that vertex
  - If any of those valeus have not been visited, recursively invoke the helper function with that vertex

```
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    })(start);

    return result;
  }
```
