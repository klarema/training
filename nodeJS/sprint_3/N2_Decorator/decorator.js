function costCalc(item) {
  let cC = item.price;
  return cC;
}

// Decorator 1
function costCalc_USD(item) {
  console.log(`Item: ${item.name}, Original price in Euro: ${item.price}.`);
  let cC = item.price * 0.819908;
  console.log(`Conversion to USD: ${cC.toFixed(2)}`);
  return cC;
}
// Decorator 2
function costCalc_GBP(item) {
  console.log(`Item: ${item.name}, Original price in Euro: ${item.price}.`);
  let cC = item.price * 1.156661;
  console.log(`Conversion to GBP: ${cC.toFixed(2)}`);
  return cC;
}
// Decorator 3
function costCalc_CHF(item) {
  console.log(`Item: ${item.name}, Original price in Euro: ${item.price}.`);
  let cC = item.price * 0.913791;
  console.log(`Conversion to CHF: ${cC.toFixed(2)}`);
  return cC;
}
// Decorator 4
function costCalc_JPY(item) {
  console.log(`Item: ${item.name}, Original price in Euro: ${item.price}.`);
  let cC = item.price * 0.007515;
  console.log(`Conversion to JPY: ${cC.toFixed(2)}`);
  return cC;
}
// Decorator 5
function costCalc_CAD(item) {
  console.log(`Item: ${item.name}, Original price in Euro: ${item.price}.`);
  let cC = item.price * 0.676626;
  console.log(`Conversion to CAD: ${cC.toFixed(2)}`);
  return cC;
}
// Decorator 6
function costCalc_CNY(item) {
  console.log(`Item: ${item.name}, Original price in Euro: ${item.price}.`);
  let cC = item.price * 0.128563;
  console.log(`Conversion to CNY: ${cC.toFixed(2)}`);
  return cC;
}

module.exports = {
  costCalc,
  costCalc_USD,
  costCalc_GBP,
  costCalc_CHF,
  costCalc_JPY,
  costCalc_CAD,
  costCalc_CNY,
};
