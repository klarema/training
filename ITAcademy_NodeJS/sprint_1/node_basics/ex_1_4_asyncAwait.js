// Nivell 1 Exercici 1
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
    id: 22,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];
// let employeeName = 'Bill Gates';
let employeeId = 2;
const getEmployee = (_param) => {
  return new Promise((resolve, reject) => {
    for (let x in employees) {
      if (employees[x].id === _param) {
        resolve(employees[x]);
      }
    }
    reject(new Error("Employee not found. "));
  });
};

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

// Nivell 1 Exercici 2
const myDelayFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved after 2 seconds");
    }, 2000);
  });
};

// Nivell 1 Exercici 1
// Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla el nom de l'empleat i el seu salari, usant les funcions que has definit a l'exercici anterior.
async function findingNameAndSalary() {
  try {
    const printEmployeeName = await getEmployee(employeeId);
    console.log(printEmployeeName.name);
    const printSalary = await getSalary(printEmployeeName);
    console.log(printSalary);
  } catch (error) {
    console.log(error.message);
  }
}
findingNameAndSalary(employeeId);

// Nivell 1 Exercici 2
// Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
async function asyFunc2() {
  try {
    const messageAfterDelay = await myDelayFunc();
    console.log(messageAfterDelay);
  } catch (error) {
    console.log("Error has occured. No message received. ");
  }
}
asyFunc2();

// Nivell 3 Exercici 1  Captura tots els errors possibles dels nivells 1 i 2.
