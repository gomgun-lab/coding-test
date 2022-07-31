function solution(N, stages) {
  const results = [];

  // 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

  for (let i = 1; i <= N; i++) {
    const stageLen = stages.filter((stage) => stage >= i).length;
    const stagePlayer = stages.filter((stage) => stage === i).length;
    const failureRate = stagePlayer / stageLen;
    results.push([i, failureRate]);
  }

  const answer = results.sort((a, b) => b[1] - a[1]).map((result) => result[0]);

  return answer;
}
