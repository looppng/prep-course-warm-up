export { };

function getNumber() {
  return Math.floor(Math.random() * (99 - 1 + 1) + 1);
}

const result = getNumber(); // call the function created above and put the result inside the variable
console.log(result); // Expected output: {random number}
