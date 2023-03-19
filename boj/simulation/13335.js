const input = require("../../fs/input");

const [truckNumber, bridgeLength, maxBridgeWeigth] = input[0]
  .split(" ")
  .map(Number);
const truckQueue = input[1].split(" ").map(Number);
const bridgeQueue = [];

let count = 0;
let curBridgeWeight = 0;

while (truckQueue.length > 0 || bridgeQueue.length > 0) {
  count++;
  if (bridgeQueue.length) {
    const [_, leftTime] = bridgeQueue[0];
    if (canBridgeDequeue(leftTime)) {
      const [leftTruck] = bridgeQueue.shift();
      curBridgeWeight -= leftTruck;
    }
  }

  const curTruckInQueue = truckQueue[0];
  if (canTruckDequeue(curTruckInQueue)) {
    const curTruck = truckQueue.shift();
    curBridgeWeight += curTruck;
    bridgeQueue.push([curTruck, count + bridgeLength]);
  }
}

function canBridgeDequeue(truck) {
  if (count !== truck) return false;

  return true;
}

function canTruckDequeue(truck) {
  if (truckQueue.length === 0) return false;
  if (bridgeQueue.length === bridgeLength) return false;
  if (maxBridgeWeigth < curBridgeWeight + truck) return false;

  return true;
}

console.log(count);
