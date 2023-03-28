const input = require("../../fs/input");

function editString(s, t) {
  for (let i = 0; i < s.length; i++) {
    let temp = t.indexOf(s[i]);
    if (temp === -1) {
      return "No";
    } else {
      t = t.substring(temp + 1);
    }
  }

  return "Yes";
}

function solve(input) {
  input.forEach((string) => {
    const [s, t] = string.split(" ");

    if (t.includes(s)) {
      console.log("Yes");
    } else {
      console.log(editString(s, t));
    }
  });
}

solve(input);
