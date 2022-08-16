// 1번째 풀이
// function solution(string) {
//   if (string.length % 2 !== 0) return false;

//   var answer = true;

//   let depth = 0;
//   const stack = [];

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "(") {
//       stack.push(string[i]);
//     } else {
//       const right = stack.pop();
//       if (right !== "(") {
//         return false;
//       }
//     }
//   }

//   if (stack.length > 0) {
//     return false;
//   }

//   return answer;
// }

// 2번째 풀이
function solution(s) {
  let answer = true;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count += s[i] === "(" ? 1 : -1;
    if (count < 0) {
      return false;
    }
  }

  answer = count === 0 ? true : false;

  return answer;
}
