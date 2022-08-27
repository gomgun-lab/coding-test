# depth First recursive pseudocode

- The function should accept a starting node
- Create a List to store the end result, to be returned at the very end
- Create an object to store visited vertices (boolean)
- Create a helper function which accepts a vertex
  - The helper function should return early if the vertex is empty
  - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
  - Loop over all of the values in the adjacencyList for that vertex
  - If any of those valeus have not been visited, recursively invoke the helper function with that vertex

```javascript
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

# depth First iterative pseudocode

- The function should accept a starting node
- Create stack to help use keep track of vertices (use a list/array)
- Create a list to store the end result, to be returned at the very end
- Create an object to store visited vertices
- Add the starting vertex to the stack, and mark it visited
- While the stack has something in it:
  - Pop the next vertex from the stack
  - If that vertex hasn't been visited yet:
    - Mark it as visited
    - Add it to the result list
    - Push all of its neighbors into the stack

```js
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let curVertex;

    visited[stack] = true;
    while (stack.length > 0) {
      curVertex = stack.pop();
      result.push(curVertex);
      this.adjacencyList[curVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
```

# Breadth First pseudocode

- This function should accept a starting vertex
- Create a queue (you can use an array) and place the starting vertex in it
- Create an array to store nodes visited
- Create an object to store nodes visited
- Mark the starting vertex as visited
- Loop as long as there is anything in the queue
- Remove the first vertex from the queue and push it into the array that stores nodes visited
- Loop over each vertex in the adjacency list for the vertex you are visiting.
- If it is not inside the object that store nodes visited, mark it as visited and enqueue that vertex

```js
breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let curVertex;
    visited[start] = true;

    while (queue.length) {
      curVertex = queue.shift();
      result.push(curVertex);
      this.adjacencyList[curVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
```
