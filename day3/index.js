// 00100
// 11110
// 10110
// 10111
// 10101
// 01111
// 00111
// 11100
// 10000
// 11001
// 00010
// 01010

// gammaRate = 10110 = 22 (the most common bits)
// epsilonRate = 01001 = 9 (the least common bits)
// power consumption = gamma rate x the epsilon rate
// 011111101011: there are five 0 bits and seven 1 bits.

import fs from "fs";
const data = fs.readFileSync("./inputs.txt");
const inputs = data.toString("utf-8").split("\n");

const calculatePowerConsumption = (inputs) => {
  const numberOfBits = inputs[0].length;
  let count0BitsArray = [];
  let count1BitsArray = [];
  let gammaRate = [];
  let epsilonRate = [];
  for (let i = 0; i < numberOfBits; i++) {
    count0BitsArray[i] = 0;
    count1BitsArray[i] = 0;
    gammaRate[i] = 0;
    epsilonRate[i] = 0;
  }

  inputs.forEach((input) => {
    const bitsArray = input.split("").map((bit) => parseInt(bit));
    for (let i = 0; i < numberOfBits; i++) {
      count0BitsArray[i] += bitsArray[i] === 0 ? 1 : 0;
      count1BitsArray[i] += bitsArray[i] === 0 ? 0 : 1;

      gammaRate[i] = count0BitsArray[i] > count1BitsArray[i] ? 0 : 1;
      epsilonRate[i] = count0BitsArray[i] > count1BitsArray[i] ? 1 : 0;
    }
  });

  const gammaRateInDecimal = parseInt(gammaRate.join(""), 2);
  const epsilonRateInDecimal = parseInt(epsilonRate.join(""), 2);
  return gammaRateInDecimal * epsilonRateInDecimal;
};

console.log(calculatePowerConsumption(inputs));
