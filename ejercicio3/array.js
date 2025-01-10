const valueToFind = 20;
const numbers = [
    1,2,3,4,5,6,7,8,9,10
];


const findTheSumOfTheNumbers = (numbers, value) => {
    if (numbers.length === 0 | numbers <= 0) {
        return console.log('The list is empty');
    }
        
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === value) {
                return [numbers[i], numbers[j]];
            }
        }
    }
}

console.log(findTheSumOfTheNumbers(numbers, valueToFind));