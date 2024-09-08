import chalk from "chalk";
import fs from "fs";

function summary({ month }) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (fs.existsSync("data/expense.json")) {
    const expenseList = JSON.parse(
      fs.readFileSync("data/expense.json", "utf-8")
    );
    if (expenseList && expenseList.length) {
      //user has expenses added
      let sum = 0;
      expenseList.forEach((expense, _) => {
        if (month) {
          let expenseMonth = new Date(parseInt(expense.date)).getMonth() + 1;
          if (parseInt(month) === expenseMonth) {
            sum += parseInt(expense.amount);
          }
        } else sum += parseInt(expense.amount);
      });
      if (month) {
        console.log(
          chalk.blue.bold(`Total expenses for ${months[month - 1]} : $${sum}`)
        );
      } else console.log(chalk.blue.bold(`Total expenses : $${sum}`));
    } else {
      //user has no expenses added
      console.log(chalk.red.bold("You don't have any expenses yet."));
    }
  } else {
    console.log(chalk.red.bold("You don't have any expenses yet."));
  }
}

export default summary;
