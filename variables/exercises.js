// Q1
let name = 'Victor'
console.log(`Good Morning, ${name}.`);
console.log(`Good Afternoon, ${name}.`);
console.log(`Good Evening, ${name}.`);

// Q2
let age = 20
let inNYears = 0

console.log(`You are ${age} years old.`)
while (inNYears < 40) {
  inNYears += 10
  age += 10
  console.log(`In ${inNYears} years, you will be ${age} years old.`)
}

// Q3
{
  let foo = 'bar'; // only creates foo within the scope of this block
}

// console.log(foo); // error output; since foo is out of scope

// Q4
const NAME = 'Victor'; // NAME is immutable, since it is defined using const
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// NAME = 'Joe'; // TypeError: Assignment to constant variable.
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// Q5
let foo = 'bar';
{
  let foo = 'qux';
  console.log(foo); // 'qux'
}

console.log(foo); // 'bar'
// Line 1 initializes a variable named foo with the value'bar'. 
// Line 2 starts a block, which creates a new scope for let variables. 
// The variable on line 1 is still visible at this point, 
// but line 3 declares a new variable named foo that shadows (hides) the variable from line 1. 
// This second variable gets initialized to 'qux', but it goes out of scope on line 4 when the block ends. 
// That brings foo from line 1 back into scope, so line 6 logs its value: bar.

// Q6
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
// For much the same reason as the previous exercise, this program doesn't raise an error, 
// and it logs bar on line 6. 
// One key difference, though, is that we are using const instead of let, 
// which may have led you to believe an error would occur on line 3. 
// However, since the two const variables are separate entities, no error occurs.

// other
let foo = 'bar';
{
  foo = 'qux';
  console.log(foo); // 'qux'
}

console.log(foo); // 'qux' (!!!)
// key: where is a variable declared?