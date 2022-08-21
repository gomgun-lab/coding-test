// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript

function solution(survey, choices) {
  var answer = "";

  const choiceScore = [999, 3, 2, 1, 0, 1, 2, 3];
  const mbtiCounter = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 4) {
      mbtiCounter[survey[i][1]] =
        (mbtiCounter[survey[i][1]] || 0) + choiceScore[choices[i]];
    } else {
      mbtiCounter[survey[i][0]] =
        (mbtiCounter[survey[i][0]] || 0) + choiceScore[choices[i]];
    }
  }

  const keys = Object.keys(mbtiCounter);

  for (let i = 0; i < keys.length; i += 2) {
    answer +=
      mbtiCounter[keys[i]] >= mbtiCounter[keys[i + 1]] ? keys[i] : keys[i + 1];
  }

  return answer;
}
