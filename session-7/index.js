// ****************************************************TASK 1****************************************************


const animals = [ 1, 2, 3, 4, 5]
console.log(animals[2])

console.log(animals.pop());


console.log(digits)



digits.push(6);

digits.unshift(0);

console.log(digits);

console.log(digits.length);


console.log(digits.sort().reverse());









// ****************************************************TASK 2****************************************************
const names = ['beyonce', 'kelly', 'michelle', 'mariah', 'ariana', 'lana', 'doja cat', 'billie', 'jazmine', 'adele']
console.log(names.sort());
console.log(names.reverse());


const numbers = [5, 325, 67, 100000, 150]
console.log(numbers.sort(function(a, b){return a-b}));
console.log(numbers.sort(function(a, b){return b-a}));












// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
function compare(a, b) {
  return a.age - b.age;
}
