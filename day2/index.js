import fs from "fs";
const data = fs.readFileSync("./inputs.txt");
const inputs = data.toString("utf-8").split("\n");

const calculate_part1 = (inputs) => {
  let horizontalPosition = 0;
  let depth = 0;
  inputs.forEach((input) => {
    const inputInfo = input.split(" ");
    const inputType = inputInfo[0];
    const inputValue = parseInt(inputInfo[1]);

    if (inputType === "forward") {
      horizontalPosition += inputValue;
    }
    if (inputType === "up") {
      depth -= inputValue;
    }
    if (inputType === "down") {
      depth += inputValue;
    }
  });
  return depth * horizontalPosition;
};

console.log(calculate_part1(inputs));

const calculate_part2 = (inputs) => {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;
  inputs.forEach((input) => {
    const inputInfo = input.split(" ");
    const inputType = inputInfo[0];
    const inputValue = parseInt(inputInfo[1]);

    if (inputType === "forward") {
      horizontalPosition += inputValue;
      depth += aim * inputValue;
    }
    if (inputType === "up") {
      aim -= inputValue;
    }
    if (inputType === "down") {
      aim += inputValue;
    }
  });
  return depth * horizontalPosition;
};

console.log(calculate_part2(inputs));
