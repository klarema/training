const calc = require('./calc');
const Product = require('./Product');

var producto_1 = new Product("PC", 499.90, "USD");
var producto_2 = new Product("Tablet", 299.90, "GBP");

// console.log(producto_1);
// console.log(producto_2);

// convert to Euro using the decorator
// calc.calcCurrency(producto_1);
calc.asyFunc2(producto_1);

// console.log(producto_1);
// console.log(producto_2);




// DECORATOR - Crea un Decorator en un arxiu que retorni una funció. / create a decorator in a file that returns a function that ...
// Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original / that does A CURRENCY conversion to EUR per the file attached
// Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises incials, aplicant diferents conversions que usin el Decorator del punt anterior / create a small app that calculates the cost of some articles in euros starting with their initial currency, then apply a currency conversion per the previous points. 
//parseFloat(items[i]);
//totalPrice.toFixed(2)