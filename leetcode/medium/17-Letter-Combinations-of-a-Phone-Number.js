var letterCombinations = function (digits) {
  const table = new Map();
  const keypad = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const result = [];
  const index = 0;
  const letter = "";

  for (let i = 2; i < keypad.length; i++) {
    table.set(i, keypad[i]);
  }

  (function bt(index, letter) {
    if (index === digits.length) {
      if (letter !== "") {
        result.push(letter);
      }
      return;
    }

    const num = digits[index];
    const arr = table.get(+num);

    for (char of arr) {
      bt(index + 1, letter + char);
    }
  })(index, letter);

  return result;
};
