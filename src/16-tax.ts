export { };

/**
 * Let's try to use our knowledge about functions to try
 * and build a tool you could use in real life.
 */

/**
 * Sales Tax
 *
 * A business requires a program that calculates how much sales tax to charge
 * Sales tax is 21% of the price of the product
 */

// You are allowed to change only this function
function calculateSalesTax(price: number): number {
    const taxRate = 0.21;
    const salesTax = price * taxRate;
    return salesTax;
}

const product = "You don't know JS";
const price = 19.99;
const salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: £" + Math.round(price * 100) / 100);
console.log("Sales tax: £" + Math.round(salesTax * 100) / 100);
console.log("Total: £" + Math.round((price + salesTax) * 100) / 100);
/* Expected output:

    > Product: You don't know JS
    > Price: £19.99
    > Sales tax: £4.20
    > Total: £24.19

*/
