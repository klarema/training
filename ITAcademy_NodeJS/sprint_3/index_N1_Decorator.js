const {currencyKey, exchangeRate, calcuatePriceinEuro, calculateTotal} = require('./calc');
const Product = require('./Product');

var pC = new Product("PC", 499.90, "USD");
var tabletZ = new Product("Tablet", 299.90, "GBP");
var iPhone = new Product("iPhone", 799.90, "CNY");
var keyboard = new Product("keyboard", 89.90, "CHF");
var monitor = new Product("monitor", 4550.90, "JPY");
var tabletY = new Product("Tablet", 349.90, "CAD");
var hPPrinter = new Product("HP Printer", 299.90, "CAD");
shoppingList = [pC, tabletZ, iPhone, keyboard, monitor, tabletY, hPPrinter]

console.log(`\nGet total price for items in shopping cart: \n`)
calculateTotal(shoppingList) 


// DECORATOR - Crea un Decorator en un arxiu que retorni una funció. / create a decorator in a file that returns a function that ...
// Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original / that does A CURRENCY conversion to EUR per the file attached
// Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises incials, aplicant diferents conversions que usin el Decorator del punt anterior / create a small app that calculates the cost of some articles in euros starting with their initial currency, then apply a currency conversion per the previous points. 
//parseFloat(items[i]);
//totalPrice.toFixed(2)