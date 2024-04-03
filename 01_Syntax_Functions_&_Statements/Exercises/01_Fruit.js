
function evalMoney(fruitType, fruitWeight, fruitPrice)
{
    const priceUnit = (() => {
        return fruitPrice * (fruitWeight / 1000);
    })();
    
   return `I need \$${priceUnit.toFixed(2)} to buy ${(fruitWeight / 1000).toFixed(2)} kilograms of ${fruitType}`;
}
console.log(evalMoney('orange', 2500, 4.5));

console.log(evalMoney('banana', 25000, 3.9));