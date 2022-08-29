// https://www.acmicpc.net/problem/10430

const { input } = require("./fs/singleLine");

const [A, B, C] = input;

console.log((+A + +B) % +C);
console.log(((+A % +C) + (+B % +C)) % +C);
console.log((+A * +B) % +C);
console.log(((+A % +C) * (+B % +C)) % +C);
