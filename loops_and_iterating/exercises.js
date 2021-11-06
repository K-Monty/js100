// Q1
let rlSync = require('readline-sync')

let age = Number(rlSync.question('How old are you? '));

console.log(`You are ${age} years old.`)
for (let inNYears = 10; inNYears < 40; inNYears += 10) {
  age += 10
  console.log(`In ${inNYears} years, you will be ${age} years old.`)
}

// Q2
function factorial(number) {
  if (number <= 1) return number;
  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

// Q3
// Why does the code below cause infinite loop?
/*
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
*/
// solution:
/* The problem occurs on line 3 where we assign 1 to counter inside the conditional part of the while loop. 
JavaScript accepts this code since the assignment always returns a truthy value (1 in this case), 
the loop condition never becomes false. 
Furthermore, the test on line 7 never becomes true since the assignment on line 3 ensures that 
counter is always equal to 2 when we execute line 7. */

// Q4
for (let i = 0; i < 5;) {
  console.log(i += 1);
}
/*The code doesn't produce an error since all 3 components of the for loop are optional. 
In this code, we omit the "next value" component; 
however, this isn't a problem here since we increment the loop variable on line 2.
FOR MORE EXPLANATION; SEE THE SOLUTION. */

// Q5
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;
tries += 1;
do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// Q6
// See Q2!
