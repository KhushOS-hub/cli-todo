#!/usr/bin/env node

import { Command } from "commander";
import { addCommand } from "../src/commands/add.js";
import { listCommands } from "../src/commands/list.js";
import { doneCommand } from "../src/commands/done.js";
import { deleteCommand } from "../src/commands/delete.js";

const program = new Command() // Creates the CLI App

program
    .name("todo")
    .description("CLI Todo App")
    .version("1.0.0")

program
    .command("add <title>")
    .description("Add a new Todo")
    .action(async (title) => {
        await addCommand(title)
    })
program
    .command("list")
    .description("Todo List")
    .action(async () => {
        await listCommands()
    })
program
    .command("done <id>")
    .description("Mark a todo as completed")
    .action(async (id) => {
        await doneCommand(id)
    })
program
    .command("delete <id>")
    .description("Delete a todo")
    .action(deleteCommand)

program.parseAsync(process.argv)
    .finally( async () => {
        const { disconnectDb } = await import ("../src/db/connect.js")
        await disconnectDb()
    })
