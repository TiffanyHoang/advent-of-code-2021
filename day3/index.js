import fs from "fs";
const data = fs.readFileSync("./inputs.txt");
const inputs = data.toString("utf-8").split("\n");

const calculatePowerConsumption = (inputs) => {
  const numberOfBits = inputs[0].length;
  const count0BitsArray = Array(numberOfBits).fill(0);
  const count1BitsArray = Array(numberOfBits).fill(0);

  inputs.forEach((input) => {
    const bitsArray = input.split("").map((bit) => parseInt(bit));
    for (let i = 0; i < numberOfBits; i++) {
      count0BitsArray[i] += bitsArray[i] === 0 ? 1 : 0;
      count1BitsArray[i] += bitsArray[i] === 0 ? 0 : 1;
    }
  });

  const gammaRate = [];
  const epsilonRate = [];

  count0BitsArray.forEach((bit, index) => {
    gammaRate[index] = count0BitsArray[index] > count1BitsArray[index] ? 0 : 1;
    epsilonRate[index] =
      count0BitsArray[index] > count1BitsArray[index] ? 1 : 0;
  });

  const gammaRateInDecimal = parseInt(gammaRate.join(""), 2);
  const epsilonRateInDecimal = parseInt(epsilonRate.join(""), 2);
  return gammaRateInDecimal * epsilonRateInDecimal;
};

console.log(calculatePowerConsumption(inputs));
