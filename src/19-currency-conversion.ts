export { };

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */


// You are allowed to change this function
function convertCurrency(price: number, exchange: number): number {
    return price * exchange * 1.01;
}


const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertCurrency(price, 1.4);
const priceInBRL = convertCurrency(price, 5.6);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

//console.log("Price: $" + priceInUSD.toFixed(2));  toFixed() rounds the number to 2 decimal places ($12.50)
//console.log("Price: R$" + priceInBRL.toFixed(2)); toFixed() rounds the number to 2 decimal places (R$70.7)

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
