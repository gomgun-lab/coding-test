function solution(numbers, hand) {
  let leftNum = 10;
  let rightNum = 12;

  const answer = numbers.map((num) => {
    if (num === 0) num = 11;
    if (num % 3 === 1) return left(num);
    else if (num % 3 === 0) return right(num);
    else {
      const leftDistance = calcDistance(
        calcCoordinate(num),
        calcCoordinate(leftNum)
      );
      const rightDistance = calcDistance(
        calcCoordinate(num),
        calcCoordinate(rightNum)
      );
      console.log(num, leftNum, rightNum, leftDistance, rightDistance);
      if (leftDistance < rightDistance) return left(num);
      else if (rightDistance < leftDistance) return right(num);
      else {
        return hand === "right" ? right(num) : left(num);
      }
    }
  });

  function left(num) {
    leftNum = num;
    return "L";
  }

  function right(num) {
    rightNum = num;
    return "R";
  }

  return answer.join("");
}

function calcCoordinate(num) {
  return [Math.floor((num - 1) / 3), (num - 1) % 3];
}

function calcDistance(curNumCord, tarNumCord) {
  return (
    Math.abs(curNumCord[0] - tarNumCord[0]) +
    Math.abs(curNumCord[1] - tarNumCord[1])
  );
}
