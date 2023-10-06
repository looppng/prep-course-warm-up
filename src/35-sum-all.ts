export { };

/**
 * Implement a function which takes two integers and returns the sum of every number between (inclusive), for example:
 *
 *  - 1, 4 will return 1 + 2 + 3 + 4 which is 10
 */

const sumAll = function (start: number, end: number): number {
    if (start > end) {
        [start, end] = [end, start];
    };

    let sum = 0;
    for (let i = start; i <= end; i++) {
        console.log(i);
        sum += i;
    }

    return sum;
}
console.log("Output:", sumAll(1, 4)); // Expected output: 10
