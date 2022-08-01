function solution(answers) {
  const answer = [];

  // 1 [1, 2, 3, 4, 5]
  // 2 [2, 1, 2, 3, 2, 4, 2, 5]
  // 3 [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  const counts = [0, 0, 0];
  const pattern_1 = [1, 2, 3, 4, 5];
  const pattern_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattenr_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === pattern_1[i % pattern_1.length]) counts[0]++;
    if (answers[i] === pattern_2[i % pattern_2.length]) counts[1]++;
    if (answers[i] === pattenr_3[i % pattenr_3.length]) counts[2]++;
  }

  const highScore = Math.max(...counts);

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === highScore) answer.push(i + 1);
  }

  return answer;
}
