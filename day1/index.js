import fs from "fs";

const data = fs.readFileSync("./inputs.txt");

const inputs = data
  .toString("utf-8")
  .split("\n")
  .map((x) => parseInt(x));

const getTotalNumberOfIncreases = (inputs) => {
  let totalNumberOfIncreasesCount = 0;
  let prev = Infinity;
  inputs.forEach((input) => {
    totalNumberOfIncreasesCount += input > prev ? 1 : 0;
    prev = input;
  });
  return totalNumberOfIncreasesCount;
};

const totalNumberOfIncreases = getTotalNumberOfIncreases(inputs);

console.log(totalNumberOfIncreases);
