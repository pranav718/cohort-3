/*
const fs = require("fs");
fs.readFile("a.txt","utf-8",(err,data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
*/

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('countwords')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count words')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(" ").length;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program.command('countlines')
  .description("Count the no. of lines in a file")
  .argument('<file>', 'file to count lines')
  .action((file) => {
    fs.readFile(file,'utf-8',(err,data) => {
        if(err){
            console.log(err);
        }else{
            const lines = data.split('\n').length;
            console.log(`There are ${lines} lines in ${file}`);
            fs.writeFile('b.txt',data,'utf-8',(err,data) => {
                if(err){
                    console.log(err);
                }else{
                    console.log(`contents written from ${file} to b.txt`);
                }
            })
        }
    })
  })


program.parse();