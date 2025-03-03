export { };

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove<T>(arr: T[], valueToRemove: T) {
  const removeIndex = arr.indexOf(valueToRemove);

  if (removeIndex === -1) {
    return [...arr];
  }

  const NewArray = [...arr.slice(0, removeIndex), ...arr.slice(removeIndex + 1)]
  return NewArray;
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
