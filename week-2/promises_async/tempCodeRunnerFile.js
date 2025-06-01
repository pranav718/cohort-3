// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was-
// hello     world    my    name   is       raman


// After the program runs, the output should be-
// hello world my name is raman

const fs = require("fs");
const path = "a.txt";

fs.readFile(path, 'utf-8', (err,data) => {
    if(err){
        console.log("Error reading the file: ",err);
        return
    }

    let words = data.split(' ');
    words = words.filter(word => word.trim()!== '');
    let cleaned = words.join(' ');

}

)

function cleanFile(filePath, cb){
    fs.readFile(filePath, "utf-8", function(err,data){
        data = data.trim();
        fs.writeFile(filePath,data, function(){
            cb();
        })
    })
}

function onDone(){
    console.log("File has been cleaned");
}
cleanFile("a.txt",onDone);