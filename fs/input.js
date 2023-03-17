const path = require("path");
const fs = require("fs");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : `${path.dirname(__filename)}/input.txt`;

let temp = fs.readFileSync(filePath).toString();

const input =
  process.platform === "linux" ? temp.split("\n") : temp.split("\r\n");

module.exports = input;
