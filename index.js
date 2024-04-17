#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
let main = async () => {
    while (conditions) {
        let optoin = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Read Todo List", "Update Task", "Delete Task", "Exit"],
            }
        ]);
        if (optoin.choice === "Add Task") {
            await addTask();
        }
        else if (optoin.choice === "Read Todo List") {
            await readTask();
        }
        else if (optoin.choice === "Update Task") {
            await updateTask();
        }
        else if (optoin.choice === "Delete Task") {
            await deletedTask();
        }
        else if (optoin.choice === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task add successfully in Todo-List`);
};
let readTask = () => {
    console.log("\n Your Todo List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
let updateTask = async () => {
    await readTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to update :",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index - 1}Updated Successfully [For updated list Check Option: "Read Todo-List"]`);
};
let deletedTask = async () => {
    await readTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your Todo-List`);
};
main();
