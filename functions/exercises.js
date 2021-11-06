// Q1
let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// Q2
function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}


let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`)
// Note: this would not run because readline-sync is not installed in this dir

// Q3
// multiply.js

// Q4
function scream(words) {
  words = words + '!!!!';
  return; //this line terminates the function; hence nth logged to console
  console.log(words);
}

scream('Yipeee');

// Q5
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');
// this function also doesn't log anything. 
// It returns 'Yippee!!!!' but doesn't do anything (print, store in a variable etc) with it 