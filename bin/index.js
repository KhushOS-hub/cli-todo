#!/usr/bin/env node

import { Command } from "commander"
import { connectDb } from "../src/db/connectDb.js"
import { addCommand } from "../src/commands/add.js"
import { listCommands } from "../src/commands/list.js"
import { doneCommand } from "../src/commands/done.js"
import { deleteCommand } from "../src/commands/delete.js"

await connectDb()

const program = new Command()

program
  .name("todo")
  .description("CLI Todo App")
  .version("1.0.0")

program
  .command("add <title>")
  .description("Add a new Todo")
  .action(addCommand)

program
  .command("list")
  .description("List Todos")
  .action(listCommands)

program
  .command("done <id>")
  .description("Mark Todo as done")
  .action(doneCommand)

program
  .command("delete <id>")
  .description("Delete Todo")
  .action(deleteCommand)

await program.parseAsync(process.argv)

const { disconnectDb } = await import("../src/db/connectDb.js")
await disconnectDb()
