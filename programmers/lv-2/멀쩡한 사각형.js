function solution(w, h) {
  var answer = 0;

  for (i = 1; i < w; i++) {
    answer += linearFn(w, h, i);
  }

  return answer * 2;
}

function linearFn(w, h, i) {
  return Math.floor((h * i) / w); // h / w * i => 6번 실패
}
