// https://school.programmers.co.kr/learn/courses/30/lessons/67258

function solution(gems) {
  var answer = [0, gems.length];
  let start = 0;
  let end = 0;

  const { size: gemsLength } = new Set(gems);
  const cart = new Map();
  cart.set(gems[0], 1);

  while (start < gems.length && end < gems.length) {
    if (cart.size === gemsLength) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1];
      }

      cart.set(gems[start], cart.get(gems[start]) - 1);

      if (cart.get(gems[start]) === 0) {
        cart.delete(gems[start]);
      }

      start++;
    } else {
      end++;
      cart.set(gems[end], cart.get(gems[end]) + 1 || 1);
    }
  }

  return answer;
}
