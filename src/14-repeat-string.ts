export { };

const repeatString = (char: string, num: number) => {
    return char.repeat(num);
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
