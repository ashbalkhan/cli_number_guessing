#! usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number - Done
// 2) user input for guessing number - Done 
// 3) compare user input with computer generated random number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 6: ",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed right number. ");
}
else {
    console.log("you guessed wrong number");
}
