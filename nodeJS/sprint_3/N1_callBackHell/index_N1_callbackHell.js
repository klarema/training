const fs = require("fs");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

function reverseText(str) {
  return new Promise(function (resolve) {
    let revStr = str.toString().split("").reverse().join("");
    resolve(revStr);
  });
}

const reverseTextSaveToFile = async () => {
  try {
    var files = await readdir(inbox);
    console.log(`Files accessed: ${files}`);
    for (let i = 0; i < files.length; i++) {
      var output = await readFile(join(inbox, files[i]));
      var strReversed = await reverseText(output);
      await writeFile(join(outbox, files[i]), strReversed);
      console.log(`${files[i]} was successfully saved in the outbox!`);
    }
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
reverseTextSaveToFile();
