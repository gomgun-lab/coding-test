// https://school.programmers.co.kr/learn/courses/30/lessons/12981?language=javascript

function solution(n, words) {
  const wordsArray = [];

  for (let i = 0; i < words.length; i++) {
    const turn = (i % n) + 1;
    const round = parseInt(i / n) + 1;

    const curWord = words[i];

    if (i !== 0) {
      const prevWord = words[i - 1];
      if (prevWord[prevWord.length - 1] !== curWord[0]) {
        return [turn, round];
      }

      if (wordsArray.includes(curWord)) {
        return [turn, round];
      }
    }

    wordsArray.push(words[i]);
  }

  return [0, 0];
}
