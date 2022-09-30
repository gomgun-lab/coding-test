// https://school.programmers.co.kr/learn/courses/30/lessons/12980?language=javascript

// 1. k 칸 앞, k 만큼 건전지 사용
// 현재까지 온 거리 x 2 위치 순간이동, 건전지 사용 x

function solution(n) {
  var ans = 0;

  while (n > 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n--;
      ans++;
    }
  }

  return ans;
}
