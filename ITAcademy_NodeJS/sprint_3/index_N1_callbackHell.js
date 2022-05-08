const fs = require("fs"); 
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const {join} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

function reverseText (str) {
    return new Promise(function(resolve){
        let revStr = str.toString()
        .split("")
        .reverse()
        .join("")
        resolve(revStr);
    })
}

const reverseTextSaveToFile = async () => {
    try{
        var files = await readdir(inbox)
        console.log(`Files accessed: ${files}`);
    }catch(error){
        console.log("Error: Folder inaccessible");
        process.exit(1);
    }
    for(let i = 0; i < files.length; i++){
        try{
            var output = await readFile(join(inbox, files[i]))
            console.log(`Reading file content...`)
        }catch(error){
            console.log("Error: File error");
            process.exit(1);
        }
        try{
            var strReversed = await reverseText(output)
            console.log(`Success: ${files[i]} content reversed. `);

        }catch(error){
            console.log(error);
        }
        try{
            await writeFile(join(outbox, files[i]), strReversed)
            console.log(`${files[i]} was successfully saved in the outbox!`)
        }catch(error){
            console.log("Error: File could not be saved!");
            process.exit(1);
        }
    }

}
reverseTextSaveToFile();
