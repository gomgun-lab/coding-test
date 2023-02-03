// https://school.programmers.co.kr/learn/courses/30/lessons/150370

// 연, 월 => 모두 일로 통일
// "오늘 >= 가입 날짜 + 유효 기간" 이면 결과에 추가

function solution(today, terms, privacies) {
  const answer = [];
  const termsMap = createTermsMap(terms);
  const todayToDay = calcDates(today);

  privacies.forEach((privacy, index) => {
    const [join, type] = privacy.split(" ");
    const privacyToDay = calcDates(join) + +termsMap[type] * 28;
    if (privacyToDay <= todayToDay) {
      answer.push(index + 1);
    }
  });

  return answer.sort((a, b) => a - b);
}

const createTermsMap = (terms) => {
  const map = {};

  terms.forEach((term) => {
    const [type, date] = term.split(" ");
    map[type] = +date;
  });

  return map;
};

const calcDates = (date) => {
  const [yyyy, mm, dd] = date.split(".").map(Number);

  return yyyy * 336 + mm * 28 + dd;
};
