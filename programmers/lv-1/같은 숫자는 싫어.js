// https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    answer.push(arr[i]);
  }

  return answer;
}
