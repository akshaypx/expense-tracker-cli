import chalk from "chalk";
import fs from "fs";

function del({ id }) {
  if (!id) {
    console.log(chalk.red.bold("Please enter ID of expense to delete"));
  } else {
    if (fs.existsSync("data/expense.json")) {
      //file exists
      let file = JSON.parse(fs.readFileSync("data/expense.json", "utf-8"));
      let newFile = file.filter((expense, _) => expense.id !== parseInt(id));

      if (newFile.length === file.length) {
        console.log(chalk.red.bold("Oops, no such expense found"));
      } else {
        fs.writeFile("data/expense.json", JSON.stringify(newFile), (err) => {
          if (err) console.log(chalk.red.bold(err));
          else console.log(chalk.greenBright("Expense successfully deleted"));
        });
      }
    }
  }
}

export default del;
