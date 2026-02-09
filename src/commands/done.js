import chalk from "chalk";
import Todo from "../models/todo.model.js"
import { connectDb } from "../db/connect.js"

export async function doneCommand(id) {
    await connectDb()

    const todo = await Todo.findById(id)

    if(!todo){
        console.log(chalk.red("No Todo Found"));
        return
    }

    todo.completed = true
    await todo.save()

    console.log(chalk.green("✅ Todo marked as done:"));
    console.log(chalk.white(todo.title));
}