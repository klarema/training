var fs = require("fs");
var zlib = require("zlib");
const exec = require("child_process").exec;
const { Buffer } = require("buffer");
const crypto = require("crypto");
// const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Nivel 1 Exercici 1:
// Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
const myRecursiveMessage = setInterval(() => {
  console.log("Missatge: amb demora d'un segon");
}, 1000);
function myClearInterval(arg) {
  clearInterval(arg);
}
setTimeout(myClearInterval, 4000, myRecursiveMessage);

// Nivel 1 Exercici 2:
// Crea una funció que, en executar-la, escrigui una frase en un fitxer
const myFitxer = "./fitxer1.txt";
const myFrase = "Una frase en un fitxer (Nivel 1 Ex 2) ";

const writeToFile = (myFitxer, myFrase) => {
  try {
    fs.writeFileSync(myFitxer, myFrase, { flag: "a+" });
  } catch (err) {
    console.error(err);
  }
};
writeToFile(myFitxer, myFrase);

// Nivel 1 Ex 3:
// Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior
const showFileContent = () => {
  fs.readFile(myFitxer, "utf8", (err, data) => {
    if (err) {
      throw err;
    } else console.log(data.toString());
  });
};
showFileContent();

// Nivel 2 Ex 1:
// Crea una funció que comprimeixi el fitxer del nivell 1
const gzip = zlib.createGzip();
const mygzipFile = "./mygzipfile.txt.gz";

function compressFile(gzip, myFitxer, mygzipFile) {
  var sourceFile = fs.createReadStream(myFitxer);
  var content = fs.createWriteStream(mygzipFile);
  sourceFile.pipe(gzip).pipe(content);
}
compressFile(gzip, myFitxer, mygzipFile);

// Nivel 2 Ex 2:
// Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.
function printCurrDir() {
  exec(`dir`, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}
printCurrDir();

// Nivel 3 Ex 1: Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1
// Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme aes-192-cbc, i esborri els fitxers inicials
// Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial
// Inclou un README amb instruccions per a l'execució de cada part

const encodedHexFile = "./encodedHexFile.txt";
const encodedBase64File = "./encodedBase64File.txt";
const encryptedHexFile = "./encryptedHexFile.txt";
const encryptedBase64File = "./encryptedBase64File.txt";
const decodedFile = "./decodedFile.txt";

function encodedFile(sourceFile) {
  const buf = Buffer.from(sourceFile);
  let encodedHex = buf.toString("hex");
  let encodedBase64 = buf.toString("base64");
  try {
    fs.writeFileSync(encodedHexFile, encodedHex);
    console.log(
      `Source file encoded to Hex. New file created:  ${encodedHexFile}`
    );
    fs.writeFileSync(encodedBase64File, encodedBase64);
    console.log(
      `Source file encoded to Base64. New file created:  ${encodedBase64File}`
    );
  } catch (err) {
    console.error(err);
  }
}

function encryptFile(encodedHexFile, encodedBase64File) {
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encryptedHex = cipher.update(encodedHexFile);
  encryptedHex = Buffer.concat([encryptedHex]);
  try {
    fs.writeFileSync(encryptedHexFile, encryptedHex);
    console.log(`Hex file encrypted. New file created:  ${encryptedHexFile}`);
  } catch (err) {
    console.error(err);
  }
  let encryptedBase64 = cipher.update(encodedBase64File);
  encryptedBase64 = Buffer.concat([encryptedBase64, cipher.final()]);
  try {
    fs.writeFileSync(encryptedBase64File, encryptedBase64);
    console.log(
      `Hex file encrypted. New file created:  ${encryptedBase64File}`
    );
  } catch (err) {
    console.error(err);
  }

  fs.unlink(encodedHexFile, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Deleted: Hex encoded file.");
    }
  });
  fs.unlink(encodedBase64File, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Deleted: Base64 encoded file.");
    }
  });
}

function decryptFile(encryptedHexFile) {
  let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decryptedHex = decipher.update(encryptedHexFile);
  decryptedHex = Buffer.concat([decryptedHex, decipher.final()]);
  // To do: fix this. Issue - new file is empty
  try {
    fs.writeFileSync(decodedFile, decryptedHex);
    console.log(
      `Encrypted Hex file decrypted and decoded - saved to a new file: ${decodedHexFile}`
    );
  } catch (err) {
    console.error(err);
  }
}

// encode, encrypt and decrypt tests: see https://github.com/klarema/training/blob/main/ITAcademy_NodeJS/sprint_1/node_basics/README.md
// encodedFile(myFitxer);
// encryptFile(encodedHexFile, encodedBase64File);
// decryptFile(encryptedHexFile);
