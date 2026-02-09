import chalk from "chalk";
import Todo from "../models/todo.model.js";
import { connectDb } from "../db/connect.js";

/*export function listCommands(){

    if(todos.length === 0){ 
    console.log(chalk.red("No Todo Registered"));
    return
}

console.log(chalk.blue("Your Todos: \n"));

todos.forEach(todo => {
    const status = todo.completed
     ? chalk.green("✅") 
     : chalk.red("❌")

    console.log(
        `${status} ${chalk.white(todo.id + ".")} ${todo.title}`
    );
})

}*/

export async function listCommands() {
    await connectDb()

    const todos = await Todo.find()

    if (todos.length === 0) {
        console.log(chalk.red("No Todo Registered Yet"));
        return
    }

    console.log(chalk.yellowBright("Your Todos: \n"));

    todos.forEach(todo=>{
        const status = todo.completed ? chalk.green("✅") : chalk.red("❌")

        console.log(`${status} ${todo.title} \n \t id: ${todo._id}`);
    })
    
}