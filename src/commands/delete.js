import chalk from "chalk"
import Todo from "../models/todo.model.js"
import { connectDb, disconnectDb } from "../db/connect.js";
import mongoose from "mongoose";

export async function deleteCommand(id) {
    await connectDb()

    const deletedTodo = await Todo.findByIdAndDelete(id)
    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log(chalk.red("Enter a valid id"));
        return
    }

    if(!deletedTodo){
        console.log(chalk.red("Todo not found to be deleted"));
        return
    }

    console.log(chalk.green("✅ Todo deleted:"));
    console.log(chalk.white(deletedTodo.title));
    
    
}