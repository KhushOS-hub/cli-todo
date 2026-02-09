import chalk from "chalk";
import Todo from "../models/todo.model.js"
import { connectDb } from "../db/connect.js";

/*export function addCommand(title) {
    const todo = {
        id: todos.length + 1,
        title,
        completed: false
    }

    todos.push(todo)

    
    console.log(chalk.green("Todo Added ✅"));
    console.log(chalk.white(`${todo.id}.${todo.title}`));
    
}*/

export async function addCommand(title) {
    await connectDb()

    const todo = await Todo.create({title})

    console.log(chalk.green("✅ Todo Added"));
    console.log(chalk.white(`${todo._id} -> ${todo.title}`));
    
    
}