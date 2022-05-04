
const fs = require("fs");
const readline = require('readline');

const calcCurrency = (product) => {
    let useCurrency = (product.currency);
    let rate = "";
    const rl = readline.createInterface({
        input: fs.createReadStream('./currency_conversions.json')
      });
    rl.on('line', (line) => {
        if(line.includes(useCurrency)){
            rate = line.substring(14, 23)
            console.log(rate + "HERE1")
            return rate
        }
    });
}

async function asyFunc2 (pro) {
    try{
        const useRate = await calcCurrency(pro);
        console.log(useRate)
    }catch (error) {
        console.log("Currency not found. ")
    }
}

module.exports = {
    calcCurrency,
    asyFunc2
}





