const fs = require("fs");
const Middleware = require("./Middleware");
const paramsFile = "./params.json";

class DoMaths {
  sum(numbers) {
    console.log(
      `Maths function - sum of arg1 and arg2: ${
        numbers.number1 + numbers.number2
      }\n`
    );
  }
  subtract(numbers) {
    console.log(
      `Maths function - arg1 subtracted by arg2: ${
        numbers.number1 - numbers.number2
      }\n`
    );
  }
  multiple(numbers) {
    console.log(
      `Maths function - arg1 multiplied by arg2: ${
        numbers.number1 * numbers.number2
      }\n`
    );
  }
}
// connect to middleware "service"
var doCalculations = new DoMaths();
//sets the target of the middleware class
const app = new Middleware(doCalculations);

app.addMwFunction((req, next) => {
  console.log(
    `Middleware starting... : arg 1 = ${req.number1}, arg 2 = ${req.number2},`
  );
  //   square of parameter vales
  req.number1 = req.number1 * req.number1;
  req.number2 = req.number2 * req.number2;
  console.log(
    `Middleware - 1st function: arg 1 squared: ${req.number1}, arg 2 squared: ${req.number2},`
  );
  next();
});

app.addMwFunction((req, next) => {
  req.number1 = req.number1 * req.number1 * req.number1;
  req.number2 = req.number2 * req.number2 * req.number2;
  console.log(
    `Middleware - 2nd function: arg 1 cubed: ${req.number1}, arg 2 cubed: ${req.number2}. `
  );
  next();
});

app.addMwFunction((req, next) => {
  req.number1 = req.number1 / req.number2;
  console.log(
    `Middleware - 3rd function: arg 1 divided by arg 2: ${req.number1}. `
  );
  next();
});

// testing
// app.sum({ value1: 45, value2: 10 });
// app.subtract({ value1: 45, value2: 10 });
// app.multiple({ value1: 45, value2: 10 });

const getParams = (paramsFile) => {
  return new Promise(function (resolve, reject) {
    fs.readFile(paramsFile, "utf8", (err, jsonString) => {
      let obj = JSON.parse(jsonString);
      resolve(obj);
      //   resolve(jsonString);
      if (err) reject(console.log("Error reading file:", err));
    });
  });
};

async function myMiddleware() {
  try {
    let numberArgs = await getParams(paramsFile);
    // console.log(numberArgs);
    // console.log(numberArgs.number1);
    app.sum(numberArgs);
    app.subtract(numberArgs);
    app.multiple(numberArgs);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
}
myMiddleware();

// Nivell 1 - Middleware
// Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON / With params read from a json.file, create an app(file) that does Maths
// Crea en un fitxer extern una classe que emmagatzemi middlewares (funcions) / Create an external file that stores middlewares/functions
// Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands incials en cadascuna de les operacions.
// Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final
