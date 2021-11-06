let rlSync = require('readline-sync');

function getNumber(prompt) {
  let number = rlSync.question(prompt);
  return number
}

function multiply(number1, number2) {
  return number1 * number2
}

let number1 = getNumber('Enter the first number: ')
let number2 = getNumber('Enter the second number: ')
let answer = multiply(number1, number2)
console.log(`${number1} * ${number2} = ${answer}`)