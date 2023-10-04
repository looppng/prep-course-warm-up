export { };

function onlyTheAces(arr: string[]) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Ace") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
