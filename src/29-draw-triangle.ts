export { };

/**
 * If you find yourself stuck with this exercise, perhaps a more visual approach would help:
 *  - https://blog.codeanalogies.com/2017/11/07/javascript-for-loops-explained/
 */

function draw(lines: number) {
    for (let i = 1; i <= lines; i++) {
        let line = '';

        for (let j = 1; j <= i; j++) {
            line += '*';
        }

        console.log(line);
    }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
