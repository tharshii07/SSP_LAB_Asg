function findWordPositions(sentence, word) {
    const positions = [];
    let index = sentence.indexOf(word);

    while (index !== -1) {
        positions.push(index);
        index = sentence.indexOf(word, index + 1);
    }

    return positions;
}

// Example usage:
const sentence = "This is a test sentence. This sentence contains the word 'sentence' multiple times.";
const word = "sentence";

const positions = findWordPositions(sentence, word);
console.log("Positions of the word '" + word + "':", positions);
