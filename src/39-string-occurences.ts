export { };

const count = (text: string, targetWord: string) => {
    const words = text.split(' ');
    let count = 0

    for (const word of words) {
        const SplitWord = word.toLowerCase();
        const TargetSplitWord = targetWord.toLowerCase();

        if (SplitWord === TargetSplitWord)
            count++;
    }

    return count;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
