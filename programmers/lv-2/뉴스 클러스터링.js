// https://school.programmers.co.kr/learn/courses/30/lessons/17677

// J(A, B) = J(A N B).length / J(A U B);

function solution(str1, str2) {
  const [s1, cnt1] = tokenize(str1.toLowerCase());
  const [s2, cnt2] = tokenize(str2.toLowerCase());

  if (cnt1 === 0 && cnt2 === 0) {
    return 65536;
  }

  let interSectSet = 0;
  s1.forEach((val, key) => {
    if (s2.has(key)) {
      interSectSet += Math.min(val, s2.get(key));
    }
  });

  return parseInt((interSectSet / (cnt1 + cnt2 - interSectSet)) * 65536);
}

function tokenize(s) {
  const tokens = new Map();
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (isAlpha(s[i]) && isAlpha(s[i + 1])) {
      cnt++;
      const token = s[i] + s[i + 1];
      tokens.set(token, tokens.has(token) ? tokens.get(token) + 1 : 1);
    }
  }

  return [tokens, cnt];
}

function isAlpha(ch) {
  return (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
}
