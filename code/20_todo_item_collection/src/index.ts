import { TodoCollection } from "./TodoCollection.js";
import { JSONTodoCollection } from "./JSONTodoCollection.js"

import inquirer from "inquirer";

// let collection: TodoCollection = new TodoCollection("USER");
// collection.addTodo("Task <1>");
// collection.addTodo("Task <2>").complete(true);

let collection: TodoCollection = new JSONTodoCollection("USER");

function displayTodoList(showCompleted: boolean = true) {
    console.log(`${collection.userName}'s tasks:`);
    console.log('------------------------------');
    collection.getTodoItems(showCompleted).forEach(item => item.print());
    console.log('------------------------------');
    console.log();
}

let showCompleted = true; 

enum Commands {
    Add = "- Add new task",
    Complete = "- Complete task",
    Toggle = "- Show/Hide completed",
    Purge = "- Remove completed",
    Quit = "- Quit",
}

function promptAddTask() : void {
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter task:",
    }).then(answers => {
        if (answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    });
}

function promptCompleteTask() : void {
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark task complete",
        choices: collection.getTodoItems(true).map(item => ({
                name: item.task,
                value: item.id,
                checked: item.completed,
            }))
    }).then(answers => {
        let completedTasks = answers["complete"] as number[];
        collection.getTodoItems().forEach(item => {
            collection.markComplete(item.id,
                (completedTasks.find(id => (id === item.id)) != undefined))
        });
        promptUser();
    });
}

function promptUser(): void {
    console.clear();
    displayTodoList(showCompleted);
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option:",
        choices: Object.values(Commands),
    }).then(answers => {
        switch(answers["command"]) {
            case Commands.Toggle: {
                showCompleted = !showCompleted;
                promptUser();
                break;
            }
            case Commands.Add:
                promptAddTask();
                break;
            case Commands.Complete:
                promptCompleteTask();
                break;
            case Commands.Purge:
                collection.removeCompleted();
                promptUser();
                break;
            case Commands.Quit: {
                console.clear();
                return;
            }
        }
    });
}

promptUser();
