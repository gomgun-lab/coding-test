function solution(board, moves) {
  let answer = 0;
  const resultArr = [0];

  // moves 배열 반복
  //// moves[i] - 1번째 값에 해당하는 board의 col을 반복
  ////// 값이 0일 경우는 다음 col
  ////// 값이 0이 아닐 경우
  //////// result 배열의 마지막 값과 비교
  ////////// 같을 경우 pop후 answer +=2
  ////////// 다른 경우 현재 값 push

  for (move of moves) {
    for (let j = 0; j < board[move - 1].length; j++) {
      if (board[j][move - 1] !== 0) {
        if (resultArr[resultArr.length - 1] === board[j][move - 1]) {
          resultArr.pop();
          answer += 2;
        } else {
          resultArr.push(board[j][move - 1]);
        }
        board[j][move - 1] = 0;
        break;
      }
    }
  }

  return answer;
}
