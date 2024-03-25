#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operatots to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
  },
]);
//
if (asnwer.operator === "Addition") {
    console.log(asnwer.firstNumber + asnwer.secondNumber);git init
} else if (asnwer.operator === "Subtraction") {
    console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.operator === "Multiplication") {
    console.log(asnwer.firstNumber * asnwer.secondNumber);
} else if (asnwer.operator === "Divison") {
    console.log(asnwer.firstNumber / asnwer.secondNumber);
}else {
    console.log("Please select valid operator")
}