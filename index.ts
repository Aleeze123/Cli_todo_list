#!/usr/bin/env node
import inquirer from "inquirer";

// 1) todos Array.
// 2) Create function.
// 3) Operation.

let todos : string[]=["Fatima", "Manal"]

async function createTodo (todos:string[]){
do{

    let answer = await inquirer.prompt([
        {
            type:"list",
            message:"select an operation",
            name:"select",
            choices:["add","update","view","delete"]
        },
     ]);  
     if(answer.select === "add"){
        let addTodo = await inquirer.prompt([
            {
                type:"input",
                message:"add item..",
                name:"todo",
            },
        ]);
        todos.push(addTodo.todo)
        console.log(todos)
     }
     if(answer.select === "update"){
        let updateTodo = await inquirer.prompt([
            {
                type:"list",
                message:"select item for update",
                name:"todo",
                choices:todos.map(item => item),
            }, 
        ]);   
        // updates
            let addTodo = await inquirer.prompt([
                {
                    type:"input",
                    message:"update item..",
                    name: "todo",
                },
            ]);
    
    let newTodos = todos.filter(val => val !== updateTodo.todo)
    todos=[...newTodos, addTodo.todo]
    console.log(todos)
     }
     
     if(answer.select === "view"){
        console.log(todos)
     }
     if(answer.select === "delete"){
        let deleteTodo = await inquirer.prompt([
            {
                type: "list",
                message:"select item for delete",
                name:"todo",
                choices:todos.map(item => item)
            },
        ]);
        let newTodos = todos.filter(val => val !== deleteTodo.todo)
        todos=[...newTodos]
        console.log(todos);
     }

    }while(true)
    }
createTodo(todos)