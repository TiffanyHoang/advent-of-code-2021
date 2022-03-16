import fs from "fs";
const data = fs.readFileSync("./inputs.txt");
const inputs = data.toString("utf-8").split("\n");

const calculatePowerConsumption = (inputs) => {
  const numberOfBits = inputs[0].length;
  const count0BitsArray = Array(numberOfBits).fill(0);
  const count1BitsArray = Array(numberOfBits).fill(0);

  inputs.forEach((input) => {
    const bitsArray = input.split("").map((bit) => parseInt(bit));
    bitsArray.forEach((bit, index) => {
      count0BitsArray[index] += bitsArray[index] === 0 ? 1 : 0;
      count1BitsArray[index] += bitsArray[index] === 0 ? 0 : 1;
    });
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

const calculateLifeSupportRating = (inputs) => {
  const numberOfBits = inputs[0].length;

  let oxyCount = 0;
  let oxy = inputs;
  let oxyRate = 0;
  while (oxy.length > 1) {
    const count0BitsArray = Array(numberOfBits).fill(0);
    const count1BitsArray = Array(numberOfBits).fill(0);

    oxy.forEach((input) => {
      const bitsArray = input.split("").map((bit) => parseInt(bit));
      bitsArray.forEach((bit, index) => {
        count0BitsArray[index] += bitsArray[index] === 0 ? 1 : 0;
        count1BitsArray[index] += bitsArray[index] === 0 ? 0 : 1;
      });
    });

    if (count1BitsArray[oxyCount] >= count0BitsArray[oxyCount]) {
      oxy = oxy.filter(
        (input) => input.split("").map((bit) => parseInt(bit))[oxyCount] === 1
      );
    } else {
      oxy = oxy.filter(
        (input) => input.split("").map((bit) => parseInt(bit))[oxyCount] === 0
      );
    }

    oxyCount += 1;

    if (oxy.length === 1) {
      oxyRate = parseInt(oxy[0], 2);
    }
  }
  let co2Count = 0;
  let co2 = inputs;
  let co2Rate = 0;
  while (co2.length > 1) {
    const count0BitsArray = Array(numberOfBits).fill(0);
    const count1BitsArray = Array(numberOfBits).fill(0);

    co2.forEach((input) => {
      const bitsArray = input.split("").map((bit) => parseInt(bit));
      bitsArray.forEach((bit, index) => {
        count0BitsArray[index] += bitsArray[index] === 0 ? 1 : 0;
        count1BitsArray[index] += bitsArray[index] === 0 ? 0 : 1;
      });
    });

    if (count1BitsArray[co2Count] >= count0BitsArray[co2Count]) {
      co2 = co2.filter(
        (input) => input.split("").map((bit) => parseInt(bit))[co2Count] === 0
      );
    } else {
      co2 = co2.filter(
        (input) => input.split("").map((bit) => parseInt(bit))[co2Count] === 1
      );
    }

    co2Count += 1;

    if (co2.length === 1) {
      co2Rate = parseInt(co2[0], 2);
    }
  }
  return oxyRate * co2Rate;
};
console.log(calculateLifeSupportRating(inputs));
