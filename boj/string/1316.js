const input = require("../../fs/input");

const stringArr = input.slice(1);

function solve(stringArr) {
  let count = 0;
  stringArr.forEach((string) => {
    count++;
    const charMap = {};
    charMap[string[0]] = true;
    for (let i = 1; i < string.length; i++) {
      if (string[i] !== string[i - 1] && charMap[string[i]]) {
        count--;
        break;
      }

      charMap[string[i]] = true;
    }
  });
  console.log(count);
}

solve(stringArr);
