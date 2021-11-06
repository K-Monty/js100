let rlSync = require('readline-sync')

let age = Number(rlSync.question('How old are you? '));
let inNYears = 0

console.log(`You are ${age} years old.`)
while (inNYears < 40) {
  inNYears += 10
  age += 10
  console.log(`In ${inNYears} years, you will be ${age} years old.`)
}