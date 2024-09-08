import chalk from "chalk";
import fs from "fs";

function summary() {
  if (fs.existsSync("data/expense.json")) {
    const expenseList = JSON.parse(
      fs.readFileSync("data/expense.json", "utf-8")
    );
    if (expenseList && expenseList.length) {
      //user has expenses added
      let sum = 0;
      expenseList.forEach((expense, _) => {
        sum += parseInt(expense.amount);
      });
      console.log(chalk.blue.bold(`Your total expense is : ${sum}`));
    } else {
      //user has no expenses added
      console.log(chalk.red.bold("You don't have any expenses yet."));
    }
  } else {
    console.log(chalk.red.bold("You don't have any expenses yet."));
  }
}

export default summary;
