const path = require("path");
const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : `${path.dirname(__filename)}/input.txt`;
let input = fs.readFileSync(filePath).toString().split("\r\n");

module.exports = input;
