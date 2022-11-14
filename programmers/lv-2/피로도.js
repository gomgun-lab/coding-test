// https://school.programmers.co.kr/learn/courses/30/lessons/87946

// 탐험을 시작하기 위해 필요한 "최소 필요 피로도"
// 탐험을 마쳤을 때 소모되는 "소모 피로도"

function solution(k, dungeons) {
  var answer = -1;

  const list = permutate(dungeons);

  for (let i = 0; i < list.length; i++) {
    let curTiredRate = k;
    let count = 0;
    for (let j = 0; j < list[i].length; j++) {
      const [required, consumed] = list[i][j];
      if (curTiredRate >= required) {
        curTiredRate -= consumed;
        count++;
      }
    }
    if (count > answer) {
      answer = count;
    }

    if (answer === dungeons.length) break;
  }

  return answer;
}

function permutate(arr) {
  const result = [];

  const dfs = (i, arr) => {
    if (i === arr.length) {
      return result.push([...arr]);
    }

    for (let j = i; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      dfs(i + 1, arr);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };

  dfs(0, arr);
  return result;
}
