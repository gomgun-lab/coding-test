//https:school.programmers.co.kr/learn/courses/30/lessons/42883

// solution 2
function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count++;
    }
    stack.push(item);
  }

  while (count < k) {
    stack.pop();
    count++;
  }

  return stack.join("");
}

// solution 1
function solution(number, k) {
  const stack = [];
  let count = k;

  for (let i = 0; i < number.length; i++) {
    if (stack.length > 0 && count != 0) {
      let top = stack[stack.length - 1];
      while (top < +number[i]) {
        if (count === 0) {
          break;
        }
        stack.pop();
        top = stack[stack.length - 1];
        count--;
      }
    }
    stack.push(+number[i]);
  }

  if (count > 0) {
    while (count > 0) {
      stack.pop();
      count--;
    }
  }

  return stack.join("");
}
