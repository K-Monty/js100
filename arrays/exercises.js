// Q1
let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

console.log(array1.length);
console.log(array2.length);  // the array still has only one element, but has 4 gaps at the end 
console.log(array3.length); /* Index positions must be non-negative integers starting from 0. 
Negative and non-integer indexes don't get taken into account when determining an array's length.*/
console.log(array4.length); /* When you set an array to a length that is shorter than its current length, 
the array gets truncated to the new length */
console.log(array5.length); // 101
/* The length property always returns a number that is one 
greater than the greatest used index position of the array */

// Q2
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

for (i=0; i<myArray.length; i++) {
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
  }
};

// Q3
let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (i=0; i<myArray2.length; i++) {
  for (j=0; j<myArray2.length; j++) {
    if (myArray2[i][j] % 2 === 0) {
      console.log(myArray2[i][j]);
    }
  }
};

// Q4
let evenOdd = myArray.map(function (value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(evenOdd)

// Q5
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(array) {
  return array.filter(element => Number.isInteger(element));
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]


// Q6
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  lengthOfElements = array.map(elem => elem.length);
  return lengthOfElements.filter(elem => elem %2 === 1);
}

console.log(oddLengths(arr)); // => [1, 5, 3]

// Q7
let arrayyyy = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((accumulator, element) => accumulator + element * element, 0);
} 

console.log(sumOfSquares(arrayyyy)); // => 83

// Q8

function oddLengthsReduce(array) {
  let filteredLengthArray = []
  array.reduce(function(accumulator, element) {
    if (element.length % 2 === 1) {
      filteredLengthArray.push(element.length);
    }
  }, 0)
  return filteredLengthArray;
}

console.log(oddLengthsReduce(arr)); // => [1, 5, 3]

// Q9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

// Q10
let arrNest = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;
console.log(arrNest);
