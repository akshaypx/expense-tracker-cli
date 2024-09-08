import chalk from "chalk";
import fs from "fs";

function list() {
  if (fs.existsSync("data/expense.json")) {
    const expenseList = JSON.parse(
      fs.readFileSync("data/expense.json", "utf-8")
    );
    if (expenseList && expenseList.length) {
      //user has expenses added
      console.log(chalk.blue.bold("Here are your expenses :"));
      console.log(
        chalk.greenBright.bold("ID    Date    Description     Amount")
      );
      expenseList.forEach((expense, _) => {
        console.log(
          chalk.greenBright(
            `${expense.id}      ${expense.date} ${expense.description}  ${expense.amount}`
          )
        );
      });
    } else {
      //user has no expenses added
      console.log(chalk.red.bold("You don't have any expenses yet."));
    }
  } else {
    console.log(chalk.red.bold("You don't have any expenses yet."));
  }
}

export default list;
