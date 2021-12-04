import fs from "fs";
const data = fs.readFileSync("./inputs.txt");
const inputs = data
  .toString("utf-8")
  .split("\n")
  .map((x) => parseInt(x));

const getTotalNumberOfIncreases_part1 = (inputs) => {
  let totalNumberOfIncreasesCount = 0;
  let prev = Infinity;
  inputs.forEach((input) => {
    totalNumberOfIncreasesCount += input > prev ? 1 : 0;
    prev = input;
  });
  return totalNumberOfIncreasesCount;
};

console.log(getTotalNumberOfIncreases_part1(inputs));

const getTotalNumberOfIncreases_part2 = (inputs) => {
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

console.log(getTotalNumberOfIncreases_part2(inputs));
