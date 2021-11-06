// shallow copy; i.e. the object itself and any properties with primitive values are duplicated
// properties that are objects themselves are copied by reference -- only pointer to the obj is copied

function clone(obj) {
  return Object.assign({}, obj)
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false


// TODO: deep copy...