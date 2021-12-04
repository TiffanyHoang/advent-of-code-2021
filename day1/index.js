import fs from "fs";

const data = fs.readFileSync("./inputs.txt");

const inputs = data
  .toString("utf-8")
  .split("\n")
  .map((x) => parseInt(x));

const getTotalNumberOfIncreases = (inputs) => {
  let totalNumberOfIncreasesCount = 0;

  let prevSum = Infinity;
  inputs.forEach((input, index) => {
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    const currentSum = [input, inputs[index + 1], inputs[index + 2]].reduce(
      reducer
    );
    totalNumberOfIncreasesCount += currentSum > prevSum ? 1 : 0;
    prevSum = currentSum;
  });
  return totalNumberOfIncreasesCount;
};

const totalNumberOfIncreases = getTotalNumberOfIncreases(inputs);

console.log(totalNumberOfIncreases);
