// https://school.programmers.co.kr/learn/courses/30/lessons/43162#qna

function dfs(cur, computers, visited) {
  visited[cur] = true;
  for (let i = 0; i < computers[cur].length; i++) {
    if (computers[cur][i] === 1 && !visited[i]) {
      dfs(i, computers, visited);
    }
  }
}

function solution(n, computers) {
  var answer = 0;
  const visited = Array.from(computers, () => false);

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      dfs(i, computers, visited);
      answer++;
    }
  }

  return answer;
}

//    0  1  2
// 0 [1, 1, 0]
// 1 [1, 1, 0]
// 2 [0, 0, 1]

//    1  2  3
// 1 [1, 1, 0]
// 2 [1, 1, 1]
// 3 [0, 1, 1]
