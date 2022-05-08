const fs = require("fs");
// const readline = require('readline');
const readline = require('readline');

const currencyKey = (product) => {
    let key = (product.currency.concat("_EUR"));
    return key;
}

const exchangeRate = (key) => {
    return new Promise(function(resolve){
        const rl = readline.createInterface({
            input: fs.createReadStream('./currency_conversions.json')
        });
        rl.on('line', (line) => {
            if(line.includes(key)){
                rate = line.substring(15, 23)
                resolve(rate)
            }
        });   
    })
}

const priceInEuro = (product, rate) => {
    let priceEUR = product.price * rate;
    return priceEUR.toFixed(2);
}

const calcuatePriceinEuro = async (product) => {
    var key = currencyKey(product);
    try{
        var rate = await exchangeRate (key);
    }catch(error){
        console.log(error);
    }
    // console.log(priceInEuro(product, rate));
    let conversion = (priceInEuro(product, rate))
    return conversion
    
}

const calculateTotal = async (shoppinglist)=> {
    try{
        let totalCost = parseFloat("0.00");
        for (let i = 0; i < shoppinglist.length; i++) {
            let item = await calcuatePriceinEuro(shoppingList[i])
                console.log(`Item: ${shoppinglist[i].name}. In ${shoppinglist[i].currency}: ${shoppinglist[i].price}. In Euro: ${item}`)
                totalCost = await totalCost + parseFloat(item);
        }
        console.log(`\n TOTAL in EUR: ${totalCost.toFixed(2)}\n`)
    }catch(error){
        console.log(error);
    }
    
}


module.exports = {
    currencyKey, 
    exchangeRate,
    priceInEuro,
    calcuatePriceinEuro, 
    calculateTotal
}





// const fs = require("fs");
// const readline = require('readline');

// const calcCurrency = (product) => {
//     let useCurrency = (product.currency);
//     let rate = "";
//     const rl = readline.createInterface({
//         input: fs.createReadStream('./currency_conversions.json')
//       });
//     rl.on('line', (line) => {
//         if(line.includes(useCurrency)){
//             rate = line.substring(14, 23)
//             console.log(rate + "HERE1")
//             return rate
//         }
//     });
// }

// async function asyFunc2 (pro) {
//     try{
//         const useRate = await calcCurrency(pro);
//         console.log(useRate)
//     }catch (error) {
//         console.log("Currency not found. ")
//     }
// }

// module.exports = {
//     calcCurrency,
//     asyFunc2
// }





