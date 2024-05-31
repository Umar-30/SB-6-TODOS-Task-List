#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let condition = true;
console.log(chalk.red("\n \t Wellcome to SB-6 TODO-List Appliciation\n"));
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("Enter Your New Task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-list successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.blue("Do you want to more task ?"),
            default: "False"
        }
    ]);
    condition = addMoreTask.addmore;
}
console.log("your updated Todo-list:", todoList);
