function solution(n) {
  var answer = '';
  
  const numList = [4, 1, 2]; // 3 % 3 = 0, 1 % 3 = 1, 2 % 3 = 2
  
  while (n != 0) {
      const remainder = n % 3;
      answer = numList[remainder] + answer;
      n = Math.floor((n - 1) / 3);
  }

  return answer
}