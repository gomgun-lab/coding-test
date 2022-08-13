function solution(record) {
  var answer = [];

  // https://school.programmers.co.kr/learn/courses/30/lessons/42888?language=javascript

  // { uid : nickName } 객체를 통해 유저의 현재 닉네임 관리

  // record map 돌면서 Enter, Leave, Change 확인
  //// enter 일 경우 uid에 해당하는 닉네임 입장 표시.
  //// leave 일 경우 uid에 해당하는 닉네임 퇴장 표시.

  const curUserNickName = {};

  for (r of record) {
    const [_, id, nickName] = r.split(" ");

    if (nickName) {
      curUserNickName[id] = nickName;
    }
  }

  record.map((r) => {
    const [action, id] = r.split(" ");

    if (action === "Enter") {
      answer.push(`${curUserNickName[id]}님이 들어왔습니다.`);
    } else if (action === "Leave") {
      answer.push(`${curUserNickName[id]}님이 나갔습니다.`);
    }
  });

  return answer;
}
