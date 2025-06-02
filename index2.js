/*
Filesystem based todo list.
Create a cli that lets a user
Add a todo
Delete a todo
Mark a todo as done
 
Store all the data in files (todos.json)
*/ 

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("todo")
  .description("Append todo to todos.json")
  .version("1.0.0");

program
  .command("addtodo")
  .description("Add and append todo to the file")
  .argument("<text>", "todo text")
  .action((text) => {
    const newTodo = {
      task: text,
      done: false
    };

    fs.readFile("todos.json", "utf-8", (err, data) => {
      let todos = [];

      if (!err && data.trim() !== "") {
        try {
          todos = JSON.parse(data); 
        } catch (e) {
          console.error("Error parsing JSON:", e.message);
        }
      }

      todos.push(newTodo); 

      fs.writeFile("todos.json", JSON.stringify(todos, null, 2), "utf-8", (err) => {
        if (err) console.error(err);
        else console.log("Todo appended successfully!");
      });
    });
  });

 
program
    .command('deletetodo')
    .description('delete todo from the file')
    .argument('<file>','JSON file storing todo')
    .argument('<index>','Index of the todo to delete')
    .action((file,index) => {
        fs.readFile(file,'utf-8',(err,data) => {
            if(err){
               return console.log(err);
            }else{
                let todos = JSON.parse(data);
                index = parseInt(index);

                if(index<0 || index>=todos.length){
                    return console.log("Invalid index");
                }

                todos.splice(index,1);

                fs.writeFile(file,JSON.stringify(todos,null,2),'utf-8',(err) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Todo deleted successfully")
                    }
                })

            }
        })
    })

program
    .command('markdone')
    .description('mark todo as done')
    .argument('<file>','JSON file storing todos')
    .argument('<index>','index to mark todo')
    .action((file,index) => {
        fs.readFile(file,'utf-8',(err,data) => {
            if(err){
                console.log(err);
            }else{
                let todos = JSON.parse(data);
                index = parseInt(index);

                if(index < 0 || index >= todos.length){
                    return console.log("Invalid index");
                }

                (todos[index].done) = true;
                
                fs.writeFile(file,JSON.stringify(todos,null,2),'utf-8',(err,data) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log('todo marked as done!!');
                    }
        
                  })
                
            }
        })
    })

program.parse();
