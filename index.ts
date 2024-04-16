#! /usr/bin/env node



console.log (`(chalk.green.bold)

___ _   _ _ __ _ __ ___ _ __   ___ _   _  
/ __| | | | '__| '__/ _ \ '_ \ / __| | | | 
| (__| |_| | |  | | |  __/ | | | (__| |_| | 
\___|\__,_|_|  |_|  \___|_| |_|\___|\__, | 
 ___ ___  _ ____   _____ _ __| |_ __|___/_ 
/ __/ _ \| '_ \ \ / / _ \ '__| __/ _ \ '__|
| (_| (_) | | | \ V /  __/ |  | ||  __/ |   
\___\___/|_| |_|\_/ \___|_|   \__\___|_|   


`)


import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgMagenta("welcome to currency converter"));

const currency : any = {
    USD : 1,
    EUR : 0.91,
    AUD : 1.52,
    PKR : 277.54,
    SAR : 5.8,
};

let userAnswer = await inquirer.prompt([
    {
        name : "from",
        message : chalk.red.bold("Enter from currency"),
        type : "list",
        choices : ["USD","EUR","AUD","PKR","SAR"],

    },

    {
        name : "to",
        message : chalk.bgBlueBright.italic("Enter to currency"),
        type : "list",
        choices : ["USD","EUR","AUD","PKR","SAR"],

    },
    {
name:"amount",
message :chalk.bgYellow ("How much amount you want to convert"),
type : "number",

    },

]);

let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount //formula
let convertedAmount = baseAmount + toAmount;
let total = convertedAmount.toFixed(2);
console.log(chalk.white.italic (total));