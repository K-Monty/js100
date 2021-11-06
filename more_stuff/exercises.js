// Q1
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// Q3
console.log(Math.sqrt(37))

// Q4
console.log(Math.max(1, 6, 3, 2));      // => 6
console.log(Math.max(-1, -6, -3, -2));  // => -1
console.log(Math.max(2, 2));            // => 2

// Q5
function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

console.log(doSomething('Jack Sparrow'))
/* This code converts a string into an array of words, reverses that array, 
and then returns a new array that contains the lengths of the words. 
It assumes that a single space character delimits the words in the original string. */

// Q6
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, myRegex) {
  let matches = [];
  for (let word of array) {
    if (myRegex.test(word)) {
      matches.push(word);
    }
  }
  return matches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

// Q7
/*Exception handling is a process that deals with errors in a manageable and predictable manner. 
It uses the try/catch statement to catch exceptions that the code in the try block raises, 
and lets the programmer deal with the problem in a way that makes sense and perhaps prevents 
a catastrophic failure or nasty bug. */

// Q8
/* write a function named isNotANumber that returns true 
if the value passed to it as an argument is NaN, false if it is not. */

function isNotANumber(value) {
  return value !== value;
}
//NaN is the only JS value that is not === to itself.

console.log(isNotANumber('NaN'))
console.log(isNotANumber(NaN))

// Q9
/*write a function that will return true if the argument is -0, 
and false if it is 0 or any other number. */

function isNegativeZero(value) {
  return 1/value === -Infinity;
}

// Q10
/*
> let x = "5"
> x = x + 1
= "51"

> let y = "5"
> y++
= 5

WHY?
If you apply ++ to a string, JavaScript coerces it into a number. 
In this case, "5" gets coerced to the number 5. 
After coercion, it then increments the value to 6. 
However, the return value is 5 since the post-increment operator (y++) returns the original value of y, 
not the incremented value.
*/