// https://school.programmers.co.kr/learn/courses/30/lessons/60057?language=javascript

function solution(s) {
  const minLen = [];

  for (let unit = 1; unit <= s.length; unit++) {
    let convertedString = [""];
    let count = 1;
    for (let index = 0; index <= s.length / unit; index++) {
      const curSlicedString = s.slice(index * unit, index * unit + unit);
      if (curSlicedString === convertedString[convertedString.length - 1]) {
        count++;
      } else {
        if (count > 1) {
          convertedString[convertedString.length - 1] =
            count + convertedString[convertedString.length - 1];
        }
        convertedString.push(curSlicedString);
        count = 1;
      }
    }
    minLen.push(convertedString.join("").length);
  }

  return Math.min(...minLen);
}
