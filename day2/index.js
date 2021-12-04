import fs from "fs";
const data = fs.readFileSync("./inputs.txt");
const inputs = data.toString("utf-8").split("\n");

let horizontalPosition = 0;
let depth = 0;
const calculate = (inputs) => {
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

console.log(calculate(inputs));
