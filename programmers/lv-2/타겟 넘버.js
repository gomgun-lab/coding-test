// https://school.programmers.co.kr/learn/courses/30/lessons/43165

let answer = 0;

function solution(numbers, target) {
  const copyedNumbers = numbers.slice();
  recursive(copyedNumbers, 0, target);
  return answer;
}

// dfs input : copyedNumbers[], prevNum, target

function recursive(numbers, prevNum, target) {
  if (numbers.length === 0) {
    if (prevNum === target) {
      answer++;
    }
    return;
  }

  const curNum = numbers.shift();
  const copyedNumbers_1 = numbers.slice();
  const copyedNumbers_2 = numbers.slice();

  recursive(copyedNumbers_1, prevNum + curNum, target);
  recursive(copyedNumbers_2, prevNum - curNum, target);
}
