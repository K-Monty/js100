// Q1
console.log('Kahmin' + ' ' + 'Goh');

// Q2
let myDigit = 4936;
while (myDigit > 0) {
  let remainder = myDigit % 10
  console.log(remainder)
  myDigit -= remainder
  myDigit /= 10
};

// Q3
console.log(typeof('true'));
console.log(typeof(false));
console.log(typeof(1.5));
console.log(typeof(2));
console.log(typeof(undefined));
console.log(typeof({ foo: 'bar' }));

// Q4
// because '5' + '10' is '510'
// every + expression that has a string operand produces a string result,
// no matter what the other operand is

// Q5
console.log(Number('5') + 10);

// Q6
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Q7
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
// answer: NO. It will return 'undefined' and fails silently

// Q8
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

// Q9
let pets = {
  asta:         'dog',
  butterscotch: 'cat',
  pudding:      'cat',
  neptune:      'fish',
  darwin:       'lizard', 
};

// Q10
console.log('foo' === 'Foo') // false

// Q11
console.log(parseInt('3.1415')) // this expression evaluate to 3

// Q12
console.log('12' < '9') // true (!!!)
// the expression evaluates as true since the operands are strings, not numbers. 
// When you compare two strings, JavaScript performs a 
// character-by-character comparison going from left to right, 
// so on the first comparison, it determines that '1' < '9', 
// so '12' must be less than '9'.'


// others
console.log('12' < 9) // false
console.log('12' - 2) // 10
console.log('12' + 3) // '123'