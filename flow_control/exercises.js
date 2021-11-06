// Q1
console.log(false || (true && false));   // false
console.log(true || (1 + 2));   // true
console.log((1 + 2) || true);   // 3
console.log(true && (1 + 2));   // 3
console.log(false && (1 + 2));   // false
console.log((1 + 2) && true);   // true
console.log((32 * 4) >= 129);   // false
console.log(false !== !true);   // false
console.log(true === 4);   // false
console.log(false === (847 === '847'));   // true
console.log(false === (847 == '847'));   // false
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);   // true

// Q2 & Q3

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Not an integer.');
    return;
  }
  console.log(number % 2 === 0 ? 'even' : 'odd');
}

// Q4
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// no 'break' statements; the execution falls through every clause case after case '113'
// hence: 'Product2', 'Product3', 'Product not found!' logged

// Q5
/*return foo() ? 'bar' : qux();

if (foo()) {
  return 'bar';
} else {
  return qux();
} */

// Q6
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
// (!!!) The output is Not Empty since, 
// while the array is empty -- it has no elements and the length property is 0 -- it isn't falsy. 
// Thus, JavaScript executes the first branch of the if statement.

// Q7
function capLongStrings(string) {
  if (!typeof(string) === 'string') {
    console.log('Not a string.');
    return;
  }

  return string.length > 10 ? string.toUpperCase() : string;
}

// Q8
function numberRange(number) {
  switch (true) {
    case (number < 0):
      console.log(`${number} is less than 0`);
      break;
    case (number <= 50):
      console.log(`${number} is between 0 and 50`);
      break;
    case (number <= 100):
      console.log(`${number} is between 51 and 100`);
      break;
    case (number > 100):
      console.log(`${number} is greater than 100`);
      break;
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);