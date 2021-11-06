// require here is like import in python. readline-sync is the name of the library
// require('readline-sync') returns the library as an object, which we assign to rlSync variable
let rlSync = require('readline-sync');
// when user type in sth, that sth is assigned to the variable name
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);