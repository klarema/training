// Nivell 1 - Exercici 1:
// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no
let promiseResolved1 = false;

function returnPromise(_params) {
  return new Promise(function (resolve, reject) {
    if (_params) {
      resolve("This is resolved");
    } else {
      reject("This is rejected");
    }
  });
}
returnPromise(promiseResolved1)
  .then((message) => console.log("Then: " + message))
  .catch((message) => console.log("Catch: " + message));

// Nivell 1 - Exercici 2:
// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.
let userDetails = {
  age: 17,
  name: "Jane",
};
// pass a function as a function parameter, and it is called inside this function = a callback function
const getMessage = (_param, callback) => {
  let message = ``;
  if (_param.age >= 18) {
    message = `${_param.name} is allowed to vote`;
  } else {
    message = `${_param.name} is not allowed to vote`;
  }
  callback(message);
};
function displayMessage(_param) {
  console.log(_param);
}
getMessage(userDetails, displayMessage);

// Nivell 2 - Exercici 1:
// Donats els objectes employees i salaries, crea una arrow function getEmployee que retorni una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];
let employeeName = "Bill Gates";
const getEmployee = (_param) => {
  return new Promise((resolve, reject) => {
    for (let x in employees) {
      if (employees[x].name === _param) {
        resolve(employees[x]);
      }
    }
    reject(new Error("Employee not found. "));
  });
};

// Nivell 2 - Exercici 2:
// Crea una altra arrow function getSalary que rebi com a paràmetre un objecte employee i retorni el seu salari.
const getSalary = (_param) => {
  return new Promise((resolve, reject) => {
    for (let x in salaries) {
      if (salaries[x].id === _param.id) {
        resolve(salaries[x].salary);
      }
    }
    reject(new Error("Salary not found. "));
  });
};

// Nivell 2 - Exercici 3:
// Invoca la primera funció getEmployee i després getSalary niant l'execució de les dues promises.
getEmployee(employeeName)
  .then((employeeDetails) => {
    console.log(
      `Then: Id ${employeeDetails.id} found for ${employeeDetails.name}`
    );
    getSalary(employeeDetails)
      .then((salaryDetails) => {
        console.log(
          `Then: Salary ${salaryDetails} found for ${employeeDetails.name}`
        );
      })
      .catch((error) => console.log("Catch: " + error));
  })
  .catch((error) => console.log("Catch: " + error));
// Nivell 3 - Exercici 1: Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.
