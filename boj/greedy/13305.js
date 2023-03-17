// https://www.acmicpc.net/problem/13305

const { array } = require("../fs/multiLine");

const n = parseInt(array[0]);
const lengthList = array[1].map((item) => BigInt(item));
const priceList = array[2].map((item) => BigInt(item));

let result = lengthList[0] * priceList[0];
let curCityPrice = priceList[0];

for (let i = 1; i < n - 1; i++) {
  if (curCityPrice < priceList[i]) {
    result += curCityPrice * lengthList[i];
  } else {
    curCityPrice = priceList[i];
    result += curCityPrice * lengthList[i];
  }
}

console.log(String(result));
