export { };

// const repeatString = (char: string, num: number) => {
//     return char.repeat(num);
//  };

export const repeatString = (char: string, number: number) => {
    let output = "";
    for (let i = 0; i < number; i++) {
        output = output + char;
    }
    return output;
};
console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
