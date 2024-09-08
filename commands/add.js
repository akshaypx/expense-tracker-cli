import fs from "fs";
import chalk from "chalk";

function add({ description, amount }) {
  let content = "";
  if (fs.existsSync("data/expense.json")) {
    //file exists already
    let file = JSON.parse(fs.readFileSync("data/expense.json", "utf-8"));
    let expense = {
      id: file.length + 1,
      description: description,
      date: Date.now(),
      amount: amount,
    };
    content = JSON.stringify([...file, expense]);
  } else {
    //file does not exist
    //create new
    //create content
    let expense = {
      id: 0,
      date: Date.now(),
      description: description,
      amount: amount,
    };
    content = JSON.stringify([expense]);
  }
  //create or update file
  fs.writeFile("data/expense.json", content, (err) => {
    if (err) console.log(chalk.red.bold(err));
    else console.log(chalk.greenBright("Expense added successfully"));
  });
}

export default add;
