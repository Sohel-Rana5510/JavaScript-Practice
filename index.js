
//prompt sync
const prompt = require ('prompt-sync')();
let name = prompt('What is your name? ');
console.log(name);

// ARRY MAP
let number =[1, 2, 3, 4, 5];
let sqareNuumbers = number.map(number => number * number);
console.log(sqareNuumbers);

// ARRY FILTER
let evenArray = number.filter(number => number % 2 === 0);
console.log(evenArray);

// ARRY REDUCE
let sum = number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
 
// ARRY JOIN
let newArray = number.join(', ');
console.log(newArray);

//Array find
let foundNumber = number.find(number => number > 3);
console.log(foundNumber);

//Array found
let foundNumbers = number.includes(3);
console.log(foundNumbers);

//Array Reverse
let reversedArray = number.reverse();
console.log(reversedArray);

//Function  Rest Operators
function sum( ...numbers) {
  let sum =  numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("sum using reduce: ", sum );
}
sum(1, 2, 3, 4, 5);


//Spread Operator
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log(combinedArray);

//Object
let student = {
  name: 'John',
  age: 20,
  grade: 'A'
};
console.log(student);   

//Object Arrary
let students = [
  { name: 'John', age: 20, grade: 'A' },
  { name: 'Jane', age: 22, grade: 'B' },            
    { name: 'Doe', age: 21, grade: 'C' }
];
console.log(students[1]);



