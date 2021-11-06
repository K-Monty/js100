// Q1
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person.name);

// Q2
/* 
Q: Which of the following values are valid keys for an object?
1
'1'
undefined
'hello world'
true
'true'

A: All the listed values are valid keys. 
Note, though, that JavaScript coerces the non-string key values to strings. 
Given the listed values, 1 and '1' represent the same key, as do true and 'true'. 
This equivalency will bite you at some point; it's inevitable, so be ready.
*/

// Q3
let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// Q4
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj)
for (i=0; i<objKeys.length; i++) {
  objKeys[i] = objKeys[i].toUpperCase();
}
/* or
let upperKeys = objKeys.map((key) => key.toUpperCase());*/
console.log(objKeys);
console.log(obj);

// Q5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// Q6
/*
Which of the following values are primitive values? Which are objects? Which are neither?

"foo"  // primitive
3.1415  // primitive
[ 'a', 'b', 'c' ]  //object
false  // primitive
foo  //neither. foo is an identifier. 
Identifiers are used to name things that have values, such as variables and functions, 
but they are not values by themselves. Thus, they are neither primitive values nor objects.
function bar() { return "bar"; }  //object
undefined  // primitive
{ a: 1, b: 2 }  //object
*/

// Q7
myObj.qux = 3

let objKeys7 = Object.keys(myObj);
objKeys7.forEach(function(key) {  // iterates solely over myObj's "own" properties - 
  // that is, those defined directly on the object, not its prototype. 
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}
// for/in iterates over all of the object's keys, including those in the prototype object

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}

// Q8
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(object, keys) {
  copiedObj = {}
  objKeys8 = Object.keys(object)
  if (keys) {
    keys.forEach(
      function(key) {
        if (objKeys8.includes(key)) {
          copiedObj[key] = object[key]
        }
      }
    )
  } else {
    Object.assign(copiedObj, object)
  }
  return copiedObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

// Q9
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
  console.log(argument2);
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

/*
The program logs 'hi' and 'hello' The reason behind this is that objects are mutable; 
strings and other primitives are not. Also, variable reassignment, such as that on line 10, 
doesn't mutate the original object even when the object is mutable. 
Thus, line 9 mutates the foo by assigning its a property to a new value ('hi'). 
Therefore, the code on line 15 logs hi. On the other hand, line 10 reassigns the argument2 variable, 
but it doesn't mutate the string represented by qux. 
Thus, line 16 logs hello: the original value of the qux variable.
*/

/*Reassignment produces a local copy! 
Only in-place changes to that object wouldn't produce a new local variable with the same name 
https://stackoverflow.com/questions/50863892/reassigning-a-global-variable-from-within-a-function*/

// Q10
[1, 2, ["a", ["b", false]], null, {}]

// Q11
let obj11 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj11.bar[3].xyz = 606

console.log(obj11)