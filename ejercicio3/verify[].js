//check if the square brackets are balanced and if they are closed correctly, then return true, else return false.
const text = "[1,2,3,5,6]";
const text1 = "[1,2,3,4],5,6";
const text2 = "1,2,3,4,5]";

const isTheSquareOkay = (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "[") {
            count++;
        } else if (text[i] === "]") {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }
    return count === 0;
};
console.log(isTheSquareOkay(text)); // true
console.log(isTheSquareOkay(text1)); // false
console.log(isTheSquareOkay(text2)); // false
