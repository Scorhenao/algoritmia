//bubble sort
const unsortedNumbers = [5, 3, 8, 4, 21, 1, 9, 2];

for (let pass = 0; pass < unsortedNumbers.length; pass++) { 
    for (let currentIndex = 0; currentIndex < unsortedNumbers.length - 1; currentIndex++) {
        const currentNumber = unsortedNumbers[currentIndex];
        const nextNumber = unsortedNumbers[currentIndex + 1];

        if (currentNumber > nextNumber) {
            unsortedNumbers[currentIndex] = nextNumber;
            unsortedNumbers[currentIndex + 1] = currentNumber;
        }
    }
}

console.log(unsortedNumbers);