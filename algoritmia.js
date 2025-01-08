/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 != 0 && i % 5 != 0) {
            console.log(`
                ${i}`);
        }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }else if (i % 3 === 0) {
            console.log ('fizz');
        }else if (i % 5 === 0) {
            console.log('buzz');
        }

    }
}
// fizzBuzz();

// Escribe una función que me permita pasar de un número binario a decimal
// formula 10110 = (1 × 2⁴) + (0 × 2³) + (1 × 2²) + (1 × 2¹) + (0 × 2⁰) = 22


const binaryToDecimal = (number) => {
    const formatedNumberToString = number.toString();
    let total = 0;
    let exponent = formatedNumberToString.length - 1;

    for (let i = 0; i < formatedNumberToString.length; i++) {
        const digit = parseInt(formatedNumberToString[i]);
        const base = 2;
        const value = digit * base ** exponent;
        total += value;
        exponent--;
    }

    if (total === 0) {
        console.log('No funca');
    }

    return total;
}

console.log(binaryToDecimal(10110)); 


// Escribe una función que me permita pasar de un número binario a decimal
// formula 10110 = (1 × 2⁴) + (0 × 2³) + (1 × 2²) + (1 × 2¹) + (0 × 2⁰) = 22


const decimalToBinary = (decimalNumber) => {
}









module.exports = { fizzBuzz, binaryToDecimal, decimalToBinary };
