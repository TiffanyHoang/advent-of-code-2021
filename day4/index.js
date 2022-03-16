import fs from "fs";
const data = fs.readFileSync("./inputs.txt");
const inputs = data.toString("utf-8").split("\n");
const [drawNumbers, devider, ...rows] = inputs;
const boards = [];
let count = 0;
rows.forEach((row) => {
  if (row.length !== 0) {
    if (boards[count] === undefined) {
      boards[count] = [];
    }
    boards[count].push(row);
  } else {
    count += 1;
  }
});

boards.forEach((board) => {
  board.forEach((row) => {
    console.log(row.split(" ").filter((number) => number.length > 0));
  });
});
console.log(drawNumbers);

console.log(boards);
