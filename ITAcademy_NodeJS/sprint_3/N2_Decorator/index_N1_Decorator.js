const {
    costCalc,
    costCalc_USD,
    costCalc_GBP,
    costCalc_CHF,
    costCalc_JPY,
    costCalc_CAD,
    costCalc_CNY,
  } = require("./decorator");
  const Product = require("./Product");
  
  var pC = new Product("PC", 499.9, "USD");
  var tabletZ = new Product("Tablet", 299.9, "GBP");
  var iPhone = new Product("iPhone", 799.9, "CNY");
  var keyboard = new Product("keyboard", 89.9, "CHF");
  var monitor = new Product("monitor", 4550.9, "JPY");
  var tabletY = new Product("Tablet", 349.9, "CAD");
  var hPPrinter = new Product("HP Printer", 299.9, "CAD");
  
  console.log("\n --- Calculation Total 1: --- ")
  let totalCost = 0;
  console.log("Total: " + (totalCost = totalCost + costCalc_USD(pC)).toFixed(2));
  console.log("Total: " + (totalCost = totalCost + costCalc_USD(iPhone)).toFixed(2));
  console.log("Total: " + (totalCost = totalCost + costCalc_USD(keyboard)).toFixed(2));
  console.log("Total: " + (totalCost = totalCost + costCalc_USD(hPPrinter)).toFixed(2));
  
  console.log("\n --- Calculation Total 2: --- ")
  totalCost = 0;
  console.log("Total: " + (totalCost = totalCost + costCalc_JPY(tabletZ)).toFixed(2));
  console.log("Total: " + (totalCost = totalCost + costCalc_JPY(tabletY)).toFixed(2));
  console.log("Total: " + (totalCost = totalCost + costCalc_JPY(monitor)).toFixed(2));
  console.log("Total: " + (totalCost = totalCost + costCalc_JPY(iPhone)).toFixed(2));
  

  