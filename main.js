#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000; //dollars
let pinCode = 1234;
myBalance += 10000;
//console.log(myBalance);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Please select your operation",
            type: "list",
            choices: ["withdraw", "checkbalance", "fast cash"]
        }
    ]);
    //console.log(operationAns);
    if (operationAns.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select your amount",
                type: "number",
            }
        ]);
        //myBalance -= amountAns.amount
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining  balance is ${myBalance}`);
        }
        else {
            console.log(`Sorry,you have insufficient balance in your account!`);
        }
    }
    else if (operationAns.operations === "checkbalance") {
        console.log(`Your current balance is ${myBalance}.`);
    }
    else if (operationAns.operations === "fast cash") {
        let cashAmount = await inquirer.prompt([
            {
                name: "cash",
                message: "select your cash amount",
                type: "list",
                choices: ["10000", "20000", "30000", "40000", "50000", "60000", "70000"]
            }
        ]);
        if (myBalance >= cashAmount.cash) {
            myBalance -= cashAmount.cash;
            console.log(`Your remaining  balance is ${myBalance}`);
        }
        else {
            console.log(`Sorry,you have insufficient balance in your account!`);
        }
    }
}
else {
    console.log("Insufficient pincode!");
}
