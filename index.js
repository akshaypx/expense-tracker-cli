#! /usr/bin/env node
import { program } from "commander";
import list from "./commands/list.js";
import add from "./commands/add.js";
import summary from "./commands/summary.js";

program.command("list").description("List all the expenses").action(list);
program
  .command("summary")
  .description("Total sum of all the expenses")
  .action(summary);
program
  .command("add")
  .description("Add a new expense with description and amount.")
  .option("-d, --description <description>", "add a description for expense")
  .option("-a, --amount <amount>", "add an amount for expense")
  .action(add);
program.parse();
