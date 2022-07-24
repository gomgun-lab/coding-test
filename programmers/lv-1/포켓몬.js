function solution(nums) {
  const poketmonCounter = {};
  const numsDiv2 = nums.length / 2;

  for (num of nums) {
    poketmonCounter[num] = (poketmonCounter[num] || 0) + 1;
  }

  const keyLen = Object.keys(poketmonCounter).length;

  return keyLen >= numsDiv2 ? numsDiv2 : keyLen;
}

// Counter 객체의 key 확인
// key의 개수가 n/2 보다 작을 경우
// key의 개수가 n/2 보다 클 경우
// key의 개수가 n/2일 경우
