//define is a word is a palindrome
const word = "radar";

const isPalindrome = (word) => {
    if (word != "" | word != null) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] != word[word.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
}

console.log(isPalindrome(word)); //true or false